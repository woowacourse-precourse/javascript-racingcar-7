// 사용자로부터 입력을 받는 view 모듈

import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/message.js";

const InputView = {
  async readCarNames() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.CAR_NAMES);
    return input;
  },

  async readTryCount() {
    const input = await Console.readLineAsync(INPUT_MESSAGES.TRY_COUNT);
    return input;
  },
};

export default InputView;
