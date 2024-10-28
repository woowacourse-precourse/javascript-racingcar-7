import { Random } from "@woowacourse/mission-utils";
import { MOVE_SETTING, POSITION_MARKER, RANDOM_SETTING } from "./constants/Setting.js";

class Car {
    #name;
    #position;

    constructor(name) {
        this.#name = name;
        this.#position = MOVE_SETTING.DEFAULT_POSITION;
    }

    tryToMove() {
        const randomNumber = Random.pickNumberInRange(
            RANDOM_SETTING.MIN_NUMBER,
            RANDOM_SETTING.MAX_NUMBER
        );
        if (randomNumber >= MOVE_SETTING.MOVE_POSSIBLE_NUMBER) {
            this.#position += MOVE_SETTING.UNIT_PER_RACE;
        }
    }

    getCurrentLog() {
        return `${this.#name} : ${POSITION_MARKER.repeat(this.#position)}`;
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }
}

export default Car;
