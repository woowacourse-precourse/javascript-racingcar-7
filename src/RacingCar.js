import ErrorCode from "./datas/ErrorCode.js";
import {Console} from '@woowacourse/mission-utils';

class RacingCar {

    constructor(name, distState = "") {
        this.setName(name);
        this.distState = distState;
    }

    setName(name) {
        if (name.length > 5) {
            throw new Error(ErrorCode.CAR_NAME_TOO_LONG);
        } else if (name.length < 1) {
            throw new Error(ErrorCode.CAR_NAME_TOO_SHORT);
        }
        this.name = name;
    }

    getDistance() {
        return this.distState.length;
    }

    goForward(num) {
        if (num >= 4) {
            this.distState += "-"
        }
    }

    printDistance() {
        Console.print(this.name + " : " + this.distState);
    }
}

export default RacingCar
