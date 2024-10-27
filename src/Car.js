import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
            this.position += 1;
        }
        this.printPosition();
    }

    printPosition() {
        const trace = '-'.repeat(this.position);
        MissionUtils.Console.print(`${this.name} : ${trace}`);
    }
}

export default Car;