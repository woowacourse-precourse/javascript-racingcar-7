import { Console } from "@woowacourse/mission-utils";
import { INPUT_PROMPTS } from "./Constants.js";

class Input {
  static async getUserInput() {
    return await Console.readLineAsync(INPUT_PROMPTS.carNames);
  }

  static async getTryCount() {
    return await Console.readLineAsync(INPUT_PROMPTS.tryCount);
  }

  // 입력한 자동차 이름들을 ","를 기준으로 나누고 모든 공백을 제거하는 함수
  static splitUserInput(input) {
    return input.split(",").map((car) => car.replace(/\s+/g, ""));
  }
}

export default Input;
