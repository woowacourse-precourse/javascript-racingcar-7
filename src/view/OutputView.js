import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_OUTPUT } from "../Constant.js";

class OutputView {
  printCurRacing(carArr, carIdx, moveCntArr) {
    Console.print(`${carArr[carIdx]} : ${"-".repeat(moveCntArr[carIdx])}`);
  }

  printGap() {
    Console.print("");
  }

  printWinner(winner) {
    Console.print(MESSAGE_OUTPUT(winner).WINNER_CAR);
  }
}

export default OutputView;
