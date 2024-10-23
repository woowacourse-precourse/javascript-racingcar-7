import { Random } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class Race {
    #carList;
    #tryCount;

    constructor(carNameList, tryCount) {
        this.#carList = carNameList.map((carName) => new Car(carName));
        this.#tryCount = tryCount;
    }

    static #pickRandomNumber() {
        return Random.pickNumberInRange(0, 9);
    }
}
