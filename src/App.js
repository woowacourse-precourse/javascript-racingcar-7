import { Console, MissionUtils } from "@woowacourse/mission-utils";
import * as Validate from './utils/validate.js'

class App {
  async run() {
    try {
      let carNames = null;

      for (let i = 1; i < 10; i++) {
        let inputCarNames = String(
          await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n => ")
        ).replace(/\s+/g, "");
      
        const isErrorCarNames = Validate.validateInputCarNames(inputCarNames);

        if (isErrorCarNames) {
          carNames = inputCarNames;
          break;
        }

        if (i === 1) {
          throw Error("[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.");
        }
      };


    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
