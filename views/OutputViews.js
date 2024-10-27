import MESSAGES from "../constants/Messages.js";
import ERRORS from "../constants/Errors.js";
import { Console } from "@woowacourse/mission-utils";

class OutputViews {
  // 실행결과 글자 출력
  static printExecutionResult() {
    Console.print(MESSAGES.EXECUTION_RESULT);
  }

  // 라운드별 실행결과
  static printEachRoundResult(racingCar) {
    racingCars.forEach((racingCar) => {
      Console.print(
        `${racingCar.getName()} : ${MESSAGES.ADVANCE.repeat(
          racingCar.getNumberOfAdvance()
        )}`
      );
    });
    Console.print("");
  }

  //우승자 출력
  static printFinalWinners(winners) {
    Console.print(
      `${MESSAGES.FINAL_WINNER}${winners
        .map((winner) => winner.getName())
        .join(",")}`
    );
  }
}

export default OutputViews;
