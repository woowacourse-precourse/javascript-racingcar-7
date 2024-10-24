import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
    constructor(name) {
        this.name = name
        this.position = 0
    }

    isGo() {
        return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
    }

    go() {
        if (this.isGo()) {
            this.position += 1;
        }
    }

    roundResult() {
        let step = '';
        for (let i = 0; i < this.position; i++) {
            step += '-'
        }
        return `${this.name} : ${step}`;
    }
}

export default Car;