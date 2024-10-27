import { Console } from "@woowacourse/mission-utils";

class OutputView {
  async printOutput(carNames, totalMovement) {
    for (let index = 0; index < totalMovement.length; index++) {
      const footprint = "-".repeat(totalMovement[index]);
      Console.print(`${carNames[index]} : ${footprint}`);
    }
    Console.print("\n");
  }
}

export default OutputView;
