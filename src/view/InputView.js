import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";
import carNameSplit from "../utils/carNameSplit.js";
import InputValidation from "../validation/InputValidation.js";

class InputView {
    #read

    constructor() {
        this.#read = Console.readLineAsync;
    }

    async readInput() {
        const carNameData = await this.#read(INPUT_MESSAGE.carName);
        const carNameArray = carNameSplit(carNameData);
        InputValidation.carNameValidate(carNameArray);

        const numberOfAttemptsData = await this.#read(INPUT_MESSAGE.numberOfAttempts);
        InputValidation.attemptsValidate(numberOfAttemptsData);

        return [carNameArray, numberOfAttemptsData];
    }
}

export default InputView;