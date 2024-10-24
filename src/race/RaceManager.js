import IOHandler from "../utils/IOHandler.js";
import { checkValidNameLength } from "./Validator.js";

class RaceManager {
    #MAX_NAME_LENGTH = Object.freeze(5);

    #carList;

    #racingCount;

    #getNamesFromStr(str) {
        return str.replaceAll(' ', '').split(',');
    }

    async #prepareRacing() {
        const inputStr = await IOHandler.input("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = this.#getNamesFromStr(inputStr);
        carNames.forEach(name => {
            checkValidNameLength(name, this.#MAX_NAME_LENGTH);
        });

        IOHandler.output(carNames);
    }

    racing() {
        this.#prepareRacing();

    }


}

export default RaceManager;