import ErrorCode from "./datas/ErrorCode.js";

class RacingCar {

    constructor(name) {
        this.setName(name);
        this.distance = 0;
    }

    setName(name) {
        if (name.length > 5) {
            throw new Error(ErrorCode.CAR_NAME_TOO_LONG);
        } else if (name.length < 1) {
            throw new Error(ErrorCode.CAR_NAME_TOO_SHORT);
        }
        this.name = name;
    }

    goForward(num) {
        if (num >= 4) {
            this.distance++
        }
    }

}

export default RacingCar
