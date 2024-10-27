import { Console } from "@woowacourse/mission-utils";

class OutputView {
  async printEachTemp(carNames, totalMovement) {
    Console.print("\n");
    for (let index = 0; index < totalMovement.length; index++) {
      const footprint = "-".repeat(totalMovement[index]);
      Console.print(`${carNames[index]} : ${footprint}`);
    }
  }
  async printWinner(winner) {
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default OutputView;
