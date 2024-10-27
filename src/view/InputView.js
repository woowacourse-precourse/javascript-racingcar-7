import { Console } from "@woowacourse/mission-utils";
import { INPUT } from "../constants/inputConstants.js";

export class InputView {
  async getCarName() {
    return Console.readLineAsync(INPUT.CAR_NAMES);
  }

  async getRaceRound() {
    return Console.readLineAsync(INPUT.ROUND);
  }
}
