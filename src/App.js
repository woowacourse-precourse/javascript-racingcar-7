import { Console, MissionUtils } from "@woowacourse/mission-utils";
import * as Validate from "./utils/validate.js";

class App {
  async run() {
    try {
      let carNames = null;
      let tryNumber = null;

      for (let i = 1; i < 10; i++) {
        let inputCarNames = String(
          await MissionUtils.Console.readLineAsync(
            "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n => "
          )
        ).replace(/\s+/g, "");

        const isErrorCarNames = Validate.validateInputCarNames(inputCarNames);

        if (isErrorCarNames) {
          carNames = inputCarNames;
          break;
        }

        if (i === 1) {
          throw Error("[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.");
        }
      }

      let carNamesArray = carNames.split(/,/);
      console.log(
        `xxxxx(확인용 - 입력된 자동차 이름들 배열 : ${JSON.stringify(
          carNamesArray
        )})`
      );

      for (let i = 1; i < 10; i++) {
        let inputTryString = await MissionUtils.Console.readLineAsync(
          "시도할 횟수는 몇 회인가요?\n => "
        );
        let inputTryNum = Number(inputTryString.trim());
        console.log(
          `xxxxx 확인용 - 시도할 횟수 확인 = ${inputTryNum} / type : ${typeof inputTryNum}`
        );

        const isErrorTryNum = Validate.validateInputTryNum(inputTryNum);

        if (isErrorTryNum) {
          console.log(
            `xxxxx 확인용 - 아주 잘 입력함!!! = ${inputTryNum} / type : ${typeof inputTryNum}`
          );
          tryNumber = inputTryNum;
          break;
        }

        if (i === 1) {
          throw Error("[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.");
        }
      }
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
