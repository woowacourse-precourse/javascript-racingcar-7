import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";

class OutputView {
  static #DASH = "-";

  static printExecutionResult() {
    return OutputView.#printMessage(OUTPUT_MESSAGE.EXECUTION_RESULT);
  }

  static printBlankLine() {
    OutputView.#printMessage(OUTPUT_MESSAGE.BLANK_LINE);
  }

  static printRaceProgress(racingCarArray) {
    racingCarArray.forEach((car) => {
      const carName = car.name;
      const distance = OutputView.#DASH.repeat(car.position);
      OutputView.#printMessage(`${carName} : ${distance}`);
    });
    return OutputView.#printMessage("\n");
  }

  static printFinalWinner(winnerString) {
    return OutputView.#printMessage(
      `${OUTPUT_MESSAGE.FINAL_WINNER} ${winnerString}`
    );
  }

  static #printMessage(outPut) {
    return Console.print(outPut);
  }
}

export default OutputView;
