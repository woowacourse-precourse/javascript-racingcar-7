// 사용자로부터 입력을 받는 view 모듈

import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../utils/message.js";

const inputView = {
  readCarNames() {
    return new Promise((resolve) => {
      Console.readLine(INPUT_MESSAGES.CAR_NAMES, (input) => {
        resolve(input);
      });
    });
  },
};

export default inputView;
