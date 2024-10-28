import { MissionUtils } from "@woowacourse/mission-utils";


class RaceCar {
    // 자동차 이름과 초기 위치를 설정

    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        // 자동차가 전진할 조건을 정의, 0~9 사이의 숫자를 생성하여, 4 이상일 경우 위치를 1 증가

        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
            this.position += 1;
        }
    }
}
