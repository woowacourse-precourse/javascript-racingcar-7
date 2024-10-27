import { Console } from "@woowacourse/mission-utils";

class OutputView {
  async printEachTemp(carNames, totalMovement) {
    for (let index = 0; index < totalMovement.length; index++) {
      const footprint = "-".repeat(totalMovement[index]);
      Console.print(`${carNames[index]} : ${footprint}`);
    }
    Console.print("\n");
  }
  async printWinner(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default OutputView;
