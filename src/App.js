import { Console, Random } from "@woowacourse/mission-utils";
import { validateCarNames, playNumIsNaN } from "./Validator.js"


class App {
  async run() {
    const carName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = carName.split(',');
    validateCarNames(carNames);
  }
}

export default App;
