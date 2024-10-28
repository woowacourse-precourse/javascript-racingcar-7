import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printStartMessage() {
    Console.print("실행 결과");
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
