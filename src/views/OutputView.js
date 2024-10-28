import { Console } from "@woowacourse/mission-utils";

class OutputView {
  static printStartMessage() {
    Console.print("\n실행 결과");
  }

  static printCarProgress(carName, progress) {
    Console.print(`${carName} : ${progress}`);
  }

  static printRoundEnd() {
    Console.print("");
  }

  static printWinner(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default OutputView;
