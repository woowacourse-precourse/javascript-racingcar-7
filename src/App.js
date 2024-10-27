import { MissionUtils } from "@woowacourse/mission-utils";
import { CountName } from "./CountNameFunction.js";
import { CountNumber } from "./CountNumberFunction.js";

class App {
  async run() {
    const inputName = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const inputCount = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );

    try {
      const result = CountName(inputName);
      const number = CountNumber(inputCount);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
