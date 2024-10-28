import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

class OutputView {
    #print

    constructor() {
        this.#print = Console.print;
    }

    printResult() {
        this.#print(OUTPUT_MESSAGE.executionResult);
    }

    printWinner(winner) {
        this.#print(OUTPUT_MESSAGE.finalWinner);
        this.#print(winner);
    }
}

export default OutputView;