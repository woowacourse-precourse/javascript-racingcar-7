import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/constants.js";

export class OutputView {
  static progressResult() {
    return Console.print(MESSAGE.ATTEMPT_RESULT);
  }

  static lineBreak() {
    return Console.print("");
  }

  static attemptResult(arr) {
    Console.print(arr.join(MESSAGE.LINE_BREAK));
  }

  static winner(arr) {
    Console.print(MESSAGE.WINNER + arr);
  }
}
