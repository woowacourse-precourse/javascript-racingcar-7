import ErrorCode from "./datas/ErrorCode.js";

class RacingCar {

    constructor(name) {
        this.setName(name);
        this.distState = "";
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
            this.distState += "-"
        }
    }

}

export default RacingCar
