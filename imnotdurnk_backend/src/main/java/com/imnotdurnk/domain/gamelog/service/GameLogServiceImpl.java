package com.imnotdurnk.domain.gamelog.service;

import com.imnotdurnk.domain.auth.enums.TokenType;
import com.imnotdurnk.domain.calendar.entity.CalendarEntity;
import com.imnotdurnk.domain.calendar.service.CalendarService;
import com.imnotdurnk.domain.gamelog.dto.GameLogDto;
import com.imnotdurnk.domain.gamelog.dto.GameStatistic;
import com.imnotdurnk.domain.gamelog.dto.VoiceResultDto;
import com.imnotdurnk.domain.gamelog.entity.GameLogEntity;
import com.imnotdurnk.domain.gamelog.entity.VoiceEntity;
import com.imnotdurnk.domain.gamelog.repository.GameLogRepository;
import com.imnotdurnk.domain.gamelog.repository.VoiceRepository;
import com.imnotdurnk.domain.user.entity.UserEntity;
import com.imnotdurnk.domain.user.repository.UserRepository;
import com.imnotdurnk.global.exception.EntitySaveFailedException;
import com.imnotdurnk.global.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.BadRequestException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GameLogServiceImpl implements GameLogService {

    private static final Logger log = LoggerFactory.getLogger(GameLogServiceImpl.class);

    private final GameLogRepository gameLogRepository;
    private final UserRepository userRepository;
    private final CalendarService calendarService;
    private final VoiceRepository voiceRepository;
    private final S3FileUploadService s3FileUploadService;
    private final JwtUtil jwtUtil;

    //게임타입
    private final int GAME_TYPE_PRONOUNCE = 1; //발음

    /**
     * 게임 통계 제공
     * 연평균, 월평균, 월평균대비 점수가 낮은 일수를 {@link GameStatistic}에 담아 반환하는 메서드
     * @param AccessToken 유저 인증 토큰
     * @param gameType
     * @param dateStr
     * @return
     */
    @Override
    public GameStatistic getGameStatistic(String AccessToken, int gameType, String dateStr) {

        UserEntity user = userRepository.findByEmail(jwtUtil.getUserEmail(AccessToken, TokenType.ACCESS));
        LocalDate date = LocalDate.parse(dateStr, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
//        List<GameLogEntity> gameLogs =

        double monthAverage = gameLogRepository.selectMonthAverage(user.getId(), gameType, date.getMonthValue(), date.getYear());

//        System.out.println(monthAverage);
        return GameStatistic.builder()
                .totalAverage(gameLogRepository.selectTotalAverage(user.getId(), gameType))
                .monthAverage(monthAverage)
                .lowerCountThanMonthAvg(gameLogRepository.countDaysWithLowScoresInMonth(
                        user.getId(), gameType, date.getMonthValue(), date.getYear(), monthAverage))
                .lowerCountThanYearAvg(gameLogRepository.countDaysWithLowScoresInYear(
                        user.getId(), gameType, date.getYear(), gameLogRepository.selectYearAverage(user.getId(), gameType, date.getYear())))
                .build();
    }

    @Override
    public GameLogEntity getGameLog(int logId) {
        return gameLogRepository.findById(logId);
    }

    /***
     * 발음 평가 게임 결과를 저장
     * @param voiceResultDto
     * @return 저장한 {@link GameLogEntity} 객체
     */
    @Override
    public GameLogEntity savePronounceGameLog(String accessToken, VoiceResultDto voiceResultDto) throws BadRequestException {
        
        GameLogEntity gameLogEntity = GameLogEntity.builder()
                .calendarEntity(calendarService.isSameUserAndGetCalendarEntity(accessToken, voiceResultDto.getPlanId())) //일정
                .score(voiceResultDto.getScore()) //점수
                .gameType(GAME_TYPE_PRONOUNCE) //게임 타입
                .build();

        gameLogEntity = gameLogRepository.save(gameLogEntity);

        if(gameLogEntity == null) throw new EntitySaveFailedException("게임 결과 저장 실패");

        return gameLogEntity;
    }

    /**
     * 발음 평가를 제외한 게임 결과를 DB에 저장
     * @param accessToken
     * @param gameResult
     */
    @Override
    public void saveGameResult(String accessToken, GameLogDto gameResult) throws BadRequestException {
        //request로 받은 plan id를 등록한 사용자가 현재 로그인한 사용자와 일치하는지 확인
        //일치한다면 캘린더 엔티티(일정 객체)를 가져옴
        CalendarEntity calendarEntity = calendarService.isSameUserAndGetCalendarEntity(accessToken, gameResult.getPlanId());

        System.out.println(calendarEntity.getId() + " " + calendarEntity.getDate());

        GameLogEntity gameLogEntity = GameLogEntity.builder()
                                        .gameType(gameResult.getGameType())
                                        .score(gameResult.getScore())
                                        .calendarEntity(calendarEntity)
                                        .build();

        gameLogEntity = gameLogRepository.save(gameLogEntity);

        if(gameLogEntity == null) throw new EntitySaveFailedException("DB에 게임 결과 저장 실패");
    }

    /**
     * 일정 이이디를 입력 받고 해당하는 게임 기록들을 전부 지움
     * @param accessToken
     * @param planId
     */
    @Transactional
    @Override
    public void deleteGameLogByPlanId(String accessToken, int planId) throws BadRequestException {

        //access token에 저장된 유저 정보와 지우고자 하는 일정 아이디의 유저 정보가 일치되는지 확인
        CalendarEntity plan = calendarService.isSameUserAndGetCalendarEntity(accessToken, planId);

        // 연관된 Voice 삭제
        Optional<List<GameLogEntity>> gameLogEntities = gameLogRepository.findByCalendarEntity_Id(planId);
        for(GameLogEntity gameLogEntity : gameLogEntities.get()) {
            VoiceEntity voice = voiceRepository.findByLogId(gameLogEntity.getId());
            if(voice != null) {
                s3FileUploadService.deleteFile(voice.getFileName());
            }
        }

        log.debug("plan Id: " + planId + "와 연관된 voice 삭제 완료");
        
        //지우기
        gameLogRepository.deleteByCalendarEntity(plan);

        log.debug("plan Id: " + planId + "에 해당하는 게임 기록 삭제 완료");

    }


}
