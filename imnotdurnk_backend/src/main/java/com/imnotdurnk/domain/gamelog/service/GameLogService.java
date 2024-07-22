package com.imnotdurnk.domain.gamelog.service;

import java.time.LocalDate;

public interface GameLogService {

    double getTotalAverage(int gameType);

    double getMonthAverage(int gameType, LocalDate date);

    int getLowerCount(int gameType, LocalDate date, double monthAverage);
}
