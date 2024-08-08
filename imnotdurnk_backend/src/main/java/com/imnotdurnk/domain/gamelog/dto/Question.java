package com.imnotdurnk.domain.gamelog.dto;

public enum Question {

    ALIEN_PIZZA("우주에서 오신 외계인은 지구의 피자에 감동했다"),
    CAT_SLEEP("내 고양이는 하루에 삼십 번이나 잠을 잔다고 주장한다"),
    MOON_RABBIT("달나라에서 온 토끼가 땅콩버터를 좋아한다는 소문이 있다"),
    SUPERHERO_SCOUT("슈퍼 히어로가 산책 중에 나를 스카우트하려고 했다"),
    TIME_TRAVELER_COFFEE("시간 여행자는 매일 아침 같은 커피를 마신다"),
    DANCING_DOLLS("알록달록한 인형들이 밤마다 춤을 춘다"),
    SOCK_DETECTIVE("마법의 주문으로 사라진 양말을 찾는 탐정 이야기"),
    PANDA_BAMBOO("판다들이 대회에서 최고로 맛있는 대나무를 만들었다"),
    SPY_ROBOT("스파이 로봇이 커피를 마시면서도 비밀을 지킨다"),
    HARRY_POTTER_BIKE("해리포터가 자전거 타는 법을 배우기 위해 학원에 갔다"),
    UNICORN_LATTE("반짝이는 유니콘이 스타벅스에서 라떼를 주문했다"),
    DINOSAUR_INTERNET("공룡들이 인터넷을 통해 공원에서 놀기 시작했다"),
    CIRCUS_ELEPHANT("서커스 코끼리가 우주 여행을 꿈꾸고 있다"),
    RAINBOW_FANTASY("무지개가 춤추는 동화 속 세상을 상상해 보세요"),
    ALIEN_CHOCOLATE("외계인들이 지구에서 초콜릿을 재배하기로 결심했다"),
    BANANA_MYSTERY("바나나가 사라진 이유를 찾는 심리 스릴러 소설"),
    DRAGON_LIBRARY("드래곤이 사라진 책을 찾아 도서관에서 헤매고 있다"),
    PIRATE_SUBWAY("해적들이 지하철을 타고 보물을 찾으러 간다"),
    WIZARD_CAT("수염이 긴 마법사가 고양이와 우주 여행을 떠난다"),
    ROBOT_SURFING("로봇들이 바다에서 서핑을 하며 경쟁하는 대회가 열린다"),
    건축학개론("첫사랑이 잘 안 되라고 첫사랑이지 잘 되면 그게 첫사랑이니? 마지막 사랑이지"),
    내남자의로맨스("원하는 걸 갖지 못하는 삶에 익숙해지면 나중에는 자신이 뭘 원하는지조차 모르게 돼"),
    내생애_일주일("초라한 옷차림이 창피한 것이 아니라 초라한 생각이 창피한 것이다"),
    도가니("우리가 싸우는 건 세상을 바꾸기 위해서가 아니라 세상이 우리를 바꾸지 못하게 하기 위해서예요"),
    동감("인연이란 말은 시작할 때 하는 말이 아니라 모든 게 끝날 때 하는 말이예요"),
    범죄와의전쟁("내가 인마 느그 서장이랑 인마 어저께도 같이 밥 묵고 싸우나도 같이 가고 다 했어"),
    분노("이해할 마음이 없는 사람에겐 아무리 설명해도 소용없어"),
    뷰티인사이드("난 니가 어떤 모습이어도 상관없어 어떤 모습이어도 네 모습이니까"),
    우행시("사랑 받아본 사람만이 사랑할 수 있고 용서 받아본 사람만이 용서할 수 있다"),
    우리의20세기("행복한지 따져보는 건 우울해지는 지름길이야"),
    EAT_PRAY_LOVE("마음을 다쳤다는 건 당신이 뭔가를 위해 노력했다는 증거예요"),
    DEAD_POETS("오늘을 즐겨라 얘들아 너희들의 삶을 특별하게 만들어라"),
    스토브리그("강한 사람이 아니어도 괜찮습니다 우리는 서로 도울 거니까요"),
    LITTLE_SUNSHINE("진짜 실패자는 지는 게 두려워서 도전조차 안하는 사람이야"),
    멜로가체질("사랑하지 않겠다는 말은 사랑을 잘하고 싶다는 말과도 같지"),
    로맨스가필요해("아프니까 청춘이다 라는 말 믿지 말고 왜 어디가 아픈지 제대로 알아야 해"),
    나의아저씨("네가 대수롭지 않게 받아들이면 남들도 대수롭지 않게 생각해"),
    괜찮아사랑이야("사랑은 상대를 위해 뭔가 포기하기는게 아니라 뭔가 해내는 거야");

    private final String sentence;

    private Question(String sentence) {
        this.sentence = sentence;
    }

    public String getSentence() {
        return sentence;
    }

    public static String getRandom() {
        return values()[(int) (Math.random() * values().length)].sentence;
    }
}