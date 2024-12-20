import { icons } from '@/shared/constants/icons';
import { calendarMinmax } from '@/shared/constants/minmaxLength';
import { useEffect, useRef, useState } from 'react';
import { alcoholLevelToString } from '../../hooks/useAlcoholLevelFormatter';
import {
    convertDateToString,
    formatTime,
    parseDateTime,
} from '../../hooks/useDateTimeFormatter';
import useCalendarStore from '../../stores/useCalendarStore';
import useModalStore from '../../stores/useModalStore';
import * as St from './CreatePlan.style';
import EditPlanAlcohol from './EditPlanAlcohol';
import EditPlanModalController from './EditPlanModalController';

const EditPlan = () => {
    const { planDetail, setPlanDetail } = useCalendarStore();
    const { openModal } = useModalStore();

    const [year, month, day] = planDetail.date.split(' ');
    const [ampm, hour, minute] = planDetail.time.split(' ');
    const formattedArrivalTime = planDetail.arrivalTime
        ? formatTime(planDetail.arrivalTime)
        : '오후 10시 00분';
    const [arrivedAmpm, arrivedHour, arrivedMinute] =
        formattedArrivalTime.split(' '); // arrivalTime이 null인 경우 기본값 설정

    // input 영역 상태 관리
    const [selectedDateInput, setSelectedDateInput] = useState({
        year,
        month,
        day,
    });
    const [selectedTime, setSelectedTime] = useState({
        ampm,
        hour,
        minute,
    });
    const [title, setTitle] = useState(planDetail.title);
    const [memo, setMemo] = useState(planDetail.memo);

    const [selectedSojuBottleCount, setSelectedSojuBottleCount] = useState(
        Math.floor(planDetail.sojuAmount / 8),
    );
    const [selectedSojuGlassCount, setSelectedSojuGlassCount] = useState(
        planDetail.sojuAmount % 8,
    );
    const [selectedBeerBottleCount, setSelectedBeerBottleCount] = useState(
        Math.floor(planDetail.beerAmount / 500),
    );
    const [selectedBeerGlassCount, setSelectedBeerGlassCount] = useState(
        Math.round((planDetail.beerAmount % 500) / 355),
    );

    const [selectedAlcoholLevel, setSelectedAlcoholLevel] = useState(
        alcoholLevelToString(planDetail.alcoholLevel),
    );

    const [selectedArrivalTime, setSelectedArrivalTime] = useState({
        ampm: arrivedAmpm,
        hour: arrivedHour,
        minute: arrivedMinute,
    });

    const memoRef = useRef(null);
    const titleRef = useRef(null);

    const today = parseDateTime(
        convertDateToString(new Date()),
        '오전 12시 00분',
    );
    const planDetailDate = parseDateTime(planDetail.date, '오전 12시 00분');

    // 오늘 이전(오늘 포함)에 등록하는 경우에만 알코올 관련 기록 수정 가능
    const shouldRenderAlcoholComponent = planDetailDate <= today;

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
        // 최초 렌더링 시, memo 초기 값에 맞춰 메모 입력 박스 높이 조절
        if (memoRef.current) {
            memoRef.current.style.height = `${memoRef.current.scrollHeight}px`;
        }
    }, []);

    // 일정 제목, 메모 글자 수 제한
    const titleMax = calendarMinmax.PLAN_TITLE_MAX_LEN;
    const titleMin = calendarMinmax.PLAN_TITLE_MIN_LEN;
    const memoMax = calendarMinmax.PLAN_MEMO_MAX_LEN;

    const handleTitleLength = (e) => {
        const input = e.target.value;
        if (input.length <= titleMax) {
            setTitle(input);
            setPlanDetail({ title: input });
        }
    };

    const handleMemoLength = (e) => {
        const input = e.target.value;
        if (input.length <= memoMax) {
            setMemo(input);
            setPlanDetail({ memo: input });
        }
    };

    // 메모 입력 공간 사이즈 updown
    const resizeTextarea = (e) => {
        e.target.style.height = 'auto'; // 다시 줄어들 때
        e.target.style.height = `${e.target.scrollHeight}px`; // 늘어날 때
    };

    return (
        <>
            <St.Container>
                <St.ScheduleContainer
                    $alcoholLevel={planDetail.alcoholLevel}
                    $isFuturePlan={planDetailDate > today}
                >
                    <h3>일정 정보</h3>
                    <St.InputContainer>
                        <St.InputItemBox
                            onClick={() => openModal('dateModal')}
                            $cursor={true}
                        >
                            <img src={icons['calendar']} alt="date" />
                            <h4>{planDetail.date}</h4>
                        </St.InputItemBox>
                        <St.InputItemBox
                            onClick={() => openModal('timeModal')}
                            $cursor={true}
                        >
                            <img src={icons['clock']} alt="time" />
                            <h4>{planDetail.time}</h4>
                        </St.InputItemBox>
                        <St.InputItemBox>
                            <img src={icons['title']} alt="title" />
                            <St.InputTitleText
                                ref={titleRef}
                                value={title}
                                onChange={handleTitleLength}
                                minLength={titleMin}
                                maxLength={titleMax}
                                placeholder={`제목은 최소 ${titleMin} ~ ${titleMax}자 입력해야 합니다.`}
                            />
                        </St.InputItemBox>
                        <St.InputItemBox $boxSize="long">
                            <img src={icons['memo']} alt="memo" />
                            <St.InputMemoText
                                ref={memoRef}
                                value={memo}
                                onChange={handleMemoLength}
                                rows="5"
                                onInput={resizeTextarea}
                                maxLength={memoMax}
                                placeholder={`최대 ${memoMax}자 까지 메모할 수 있습니다.`}
                            />
                        </St.InputItemBox>
                    </St.InputContainer>
                </St.ScheduleContainer>
                {shouldRenderAlcoholComponent ? (
                    <EditPlanAlcohol
                        openAlcoholModal={() => openModal('alcoholModal')}
                        openAlcoholLevelModal={() =>
                            openModal('alcoholLevelModal')
                        }
                        openArrivalTimeModal={() =>
                            openModal('arrivalTimeModal')
                        }
                        selectedSojuBottleCount={selectedSojuBottleCount}
                        selectedSojuGlassCount={selectedSojuGlassCount}
                        selectedBeerBottleCount={selectedBeerBottleCount}
                        selectedBeerGlassCount={selectedBeerGlassCount}
                    />
                ) : (
                    <St.NoticeAboutFuturePlan>
                        미래 일정에는 음주 및 게임 기록이 저장되지 않습니다.
                    </St.NoticeAboutFuturePlan>
                )}
            </St.Container>
            <EditPlanModalController
                selectedDateInput={selectedDateInput}
                setSelectedDateInput={setSelectedDateInput}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                selectedSojuBottleCount={selectedSojuBottleCount}
                setSelectedSojuBottleCount={setSelectedSojuBottleCount}
                selectedSojuGlassCount={selectedSojuGlassCount}
                setSelectedSojuGlassCount={setSelectedSojuGlassCount}
                selectedBeerBottleCount={selectedBeerBottleCount}
                setSelectedBeerBottleCount={setSelectedBeerBottleCount}
                selectedBeerGlassCount={selectedBeerGlassCount}
                setSelectedBeerGlassCount={setSelectedBeerGlassCount}
                selectedAlcoholLevel={selectedAlcoholLevel}
                setSelectedAlcoholLevel={setSelectedAlcoholLevel}
                selectedArrivalTime={selectedArrivalTime}
                setSelectedArrivalTime={setSelectedArrivalTime}
            />
        </>
    );
};

export default EditPlan;
