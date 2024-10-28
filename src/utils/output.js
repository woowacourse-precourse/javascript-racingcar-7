import { Console } from "@woowacourse/mission-utils";

class Output {
  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default Output;
