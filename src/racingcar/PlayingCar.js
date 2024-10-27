import RandomNumberGenerator from "../utils/RandonNumberGenerator.js";
import { CAR_SETTINGS } from "../constants/Settings.js";

class PlayingCar {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move() {
        const randomNumber = RandomNumberGenerator.pickNumberInRange();
        if (randomNumber >= CAR_SETTINGS.MOVE_THRESHOLD) {
            this.position += 1;
        }
    }

    getPosition() {
        return this.position;
    }

    getName() {
        return this.name;
    }
}

export default PlayingCar;