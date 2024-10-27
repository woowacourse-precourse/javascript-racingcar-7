import { Random } from "@woowacourse/mission-utils";

class Car {
    #name;
    #position;

    constructor(name) {
        this.#name = name;
        this.#position = 0;
    }

    tryToMove() {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
            this.#position += 1;
        }
    }

    getName() {
        return this.#name;
    }

    getPosition() {
        return this.#position;
    }
}

export default Car;
