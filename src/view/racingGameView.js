import { Console } from "@woowacourse/mission-utils";
import { INPUT_CAR_NAME, INPUT_COUNT_EXECUTE } from "../utils/constant.js";

class RacingGameView {
  async inputCarNames() {
    const userInputNames = await Console.readLineAsync(INPUT_CAR_NAME);
    return userInputNames;
  }

  async inputAttemptCounts() {
    const userInputCounts = await Console.readLineAsync(INPUT_COUNT_EXECUTE);
    return userInputCounts;
  }

  printError(message) {
    Console.print(message);
  }

  printExecutionResult() {
    Console.print("실행 결과");
  }

  printCarStatus(carName, carScore) {
    Console.print(`${carName} : ${carScore} `);
  }

  printEmptyLine() {
    Console.print("");
  }

  printWinners(winners) {
    Console.print(`최종 우승자: ${winners}`);
  }
}

export default RacingGameView;
