import * as Validator from "./Validator.js";
import IOHandler from "../utils/IOHandler.js";
import Car from "./Car.js";

class CarManager {
    #MAX_NAME_LENGTH = Object.freeze(5);

    #getNamesFromStr(str) {
        return str.replaceAll(' ', '').split(',');
    }

    #getCarsFromCarNames(carNames) {
        return carNames.map((name) => new Car(name));
    }

    #validateCarName(name) {
        Validator.checkNotBlank(name);
        Validator.checkOnlyEnglishAndNumberCharacters(name);
        Validator.checkValidNameLength(name, this.#MAX_NAME_LENGTH);
    }

    async getCars() {
        const inputStr = await IOHandler.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.#getNamesFromStr(inputStr);
        carNames.forEach(name => {
            this.#validateCarName(name);
        });

        Validator.checkExistDuplicateName(carNames);
        return this.#getCarsFromCarNames(carNames);
    }
}

export default CarManager;