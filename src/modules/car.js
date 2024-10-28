import { Random } from '@woowacourse/mission-utils';

export default class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        const randomValue = Random.pickNumberInRange(0, 9); // 0에서 9까지의 랜덤 값 추출
        if (randomValue >= 4) this.position++;
    }

    getPosition() {
        return "-".repeat(this.position); // 현재 위치를 '-'로 표시
    }
}
