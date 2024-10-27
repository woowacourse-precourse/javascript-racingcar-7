import { Console } from "@woowacourse/mission-utils";
import { RACING_CAR_MESSAGES } from "../constants/racingCarMessages.js";

/**
 * 사용자에게 출력값 및 메세지를 보여주기 위한 js
 */

export const OutputView = {
    
    outputExecutionResults() {
        Console.print(RACING_CAR_MESSAGES.output_execution_results);
    },

    outputExecutionRoundResult(car, status) {
        Console.print(RACING_CAR_MESSAGES.output_execution_round_results(car, status));
    },

    outputPrintLine() {
        Console.print('');
    },
}