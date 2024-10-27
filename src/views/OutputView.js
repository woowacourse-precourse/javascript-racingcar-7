import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printGameStartMessage() {
    Console.print("\n실행 결과");
  }

  printCarsStatus(carsStatus) {
    carsStatus.forEach((status) => {
      Console.print(status);
    });
    Console.print("");
  }

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default OutputView;
