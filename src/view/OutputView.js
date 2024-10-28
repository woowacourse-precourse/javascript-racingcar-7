import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/messages.js";
import RacingCars from "../model/RacingCars.js";

class OutputView {
  static executionResult() {
    return OutputView.printMessage(OUTPUT_MESSAGE.EXECUTION_RESULT);
  }
  static #DASH = "-";

  static raceProgress(racingCarArray) {
    racingCarArray.forEach((car) => {
      const carName = car.name;
      const distance = OutputView.#DASH.repeat(car.position);
      OutputView.printMessage(`${carName} : ${distance}`);
    });
    return OutputView.printMessage("\n");
  }

  static finalWinner(winnerString) {
    return OutputView.printMessage(
      `${OUTPUT_MESSAGE.FINAL_WINNER} ${winnerString}`
    );
  }

  static printMessage(outPut) {
    return Console.print(outPut);
  }
}

export default OutputView;
