import { MissionUtils } from "@woowacourse/mission-utils";

class Car {

    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        if (this.moveOrStop()) {
            this.position++;
        }
    }

    // 전진 또는 멈춤
    moveOrStop() {
        return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
    }

    // 현재 위치
    moveForward(){
        return `${this.name} : ${'-'.repeat(this.position)}`;
    }
}

export default Car;