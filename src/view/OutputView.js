import { Console } from "@woowacourse/mission-utils";

class OutputView {
  async printEachTemp(carNames, totalDistant) {
    Console.print("\n");
    for (let index = 0; index < totalDistant.length; index++) {
      const footprint = "-".repeat(totalDistant[index]);
      Console.print(`${carNames[index]} : ${footprint}`);
    }
  }
  async printWinner(winner) {
    Console.print(`\n최종 우승자 : ${winner}`);
  }
}

export default OutputView;
