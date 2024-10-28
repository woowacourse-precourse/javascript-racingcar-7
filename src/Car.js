import { RESULT_STATUS } from "./constant";

class Car {
    constructor(name) {
        this.name = name.trim();
        this.forward = '';
    }

    MoveForward(randomnumber) {
        if (randomnumber >= 4) {
            this.forward += RESULT_STATUS.SIGN;
        }
    }

    getPosition() {
        return `${this.name} : ${this.forward}`
    }
    
    getForwardCount() {
        return this.forward.length;
    }
}
export default Car;