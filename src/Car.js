import { MissionUtils, Console } from '@woowacourse/mission-utils';

class Car {
    constructor(name) {
        this.name = name;
        this.currDistance = '';
    }
    goForward() {
        let condition = MissionUtils.Random.pickNumberInRange(0, 9);
        if (condition >= 4) {
            this.currDistance += '-';
        }
    }

    printDistance() {
        let result = this.name + ': ' + this.currDistance;
        Console.print(result);
    }

    getDistance() {
        return this.currDistance.length;
    }
    
    getName() {
        return this.name;
    }
}

export default Car;