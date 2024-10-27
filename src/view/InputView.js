import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants.js";

class InputView {
    #read

    constructor() {
        this.#read = Console.readLineAsync;
    }

    async readInput() {
        const carNameData = await this.#read(INPUT_MESSAGE.carName);
        const numberOfAttemptsData = await this.#read(INPUT_MESSAGE.numberOfAttempts);
        return [carNameData, numberOfAttemptsData];
    }
}

export default InputView;