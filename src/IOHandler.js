import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class IOHandler {
  constructor() {
    this.validator = new Validator();
  }

  async getNameInput() {
    let inputNames;
    try {
      inputNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      this.validator.validataNameInput(inputNames);

      return inputNames;
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async getCountInput() {
    let count;
    try {
      count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      this.validator.validataCountInput(count);
      return count;
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }
}

export default IOHandler;
