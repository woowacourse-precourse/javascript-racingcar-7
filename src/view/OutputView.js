import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants.js";

class OutputView {
    #print

    constructor() {
        this.#print = Console.print;
    }

    printResultPrefix() {
        this.#print(OUTPUT_MESSAGE.executionResult);
    }

    printResult(carArray) {
        for (let car of carArray) {
            this.#print(car.getName() + " : " + "-".repeat(car.getPosition()));
        }
        this.#print("");
    }

    printWinner(winner) {
        this.#print(OUTPUT_MESSAGE.finalWinner);
        this.#print(winner);
    }
}

export default OutputView;