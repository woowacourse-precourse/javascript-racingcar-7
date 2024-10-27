import { MissionUtils } from '@woowacourse/mission-utils';

function Car(name) {
    this.name = name;
    this.position = 0;

    this.move = function () {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
            this.position++;
        }
        this.printPosition()
    }

    this.printPosition = function () {
        let trace = '-'.repeat(this.position)
        MissionUtils.Console.print(`${this.name} : ${trace}`)
    }
}

export default Car;