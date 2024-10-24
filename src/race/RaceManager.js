import IOHandler from "../utils/IOHandler.js";
import { checkValidNameLength, checkLessThanOrEqualMaxCount } from "./Validator.js";
import Car from "./Car.js";

class RaceManager {
    #MAX_NAME_LENGTH = Object.freeze(5);

    #MAX_RACE_COUNT = Object.freeze(100);

    #carList;

    #racingCount;

    #getNamesFromStr(str) {
        return str.replaceAll(' ', '').split(',');
    }

    #setCarListFromCarNames(carNames) {
        this.#carList = carNames.map((name) => new Car(name));
    }

    #setRacingCount(count) {
        this.#racingCount = count;
    }

    async #prepareRacing() {
        const inputStr = await IOHandler.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.#getNamesFromStr(inputStr);
        carNames.forEach(name => {
            checkValidNameLength(name, this.#MAX_NAME_LENGTH);
        });

        const inputCount = await IOHandler.input("시도할 횟수는 몇 회인가요?");
        checkLessThanOrEqualMaxCount(inputCount, this.#MAX_RACE_COUNT);
        IOHandler.output(`carNames: ${carNames}, inputCount: ${inputCount}`);

        this.#setCarListFromCarNames(carNames);
        this.#setRacingCount(inputCount);
    }

    racing() {
        this.#prepareRacing();

    }


}

export default RaceManager;