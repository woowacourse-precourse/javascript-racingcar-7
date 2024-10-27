import { Console } from "@woowacourse/mission-utils";

class OutputView {
  printCurRacing(carArr, carIdx, moveCntArr) {
    Console.print(`${carArr[carIdx]} : ${"-".repeat(moveCntArr[carIdx])}`);
  }

  printGap() {
    Console.print("");
  }

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

export default OutputView;
