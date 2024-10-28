// 사용자에게 출력을 담당하는 클래스

import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../utils/message.js";

export default class OutputView {
  static printGameStart() {
    Console.print(OUTPUT_MESSAGES.START_GAME_NOTICE);
  }

  static printErrorMessage(message) {
    Console.print(`${OUTPUT_MESSAGES.ERROR_MESSAGE_PREFIX} ${message}`);
  }
}
