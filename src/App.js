import { MissionUtils } from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";

class App {
  async run() {
    try {
      const inputValidator = new InputValidator();

      const input = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const carNames = input.split(",");
      inputValidator.validateCarNames(carNames);

      MissionUtils.Console.print(carNames);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
  }
}

export default App;
