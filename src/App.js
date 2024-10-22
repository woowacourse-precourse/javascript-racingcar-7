import { Console, Random } from "@woowacourse/mission-utils";
import { validateCarNames, playNumIsNaN } from "./Validator.js"


class App {
  async run() {
    const carName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = carName.split(',');
    validateCarNames(carNames);

    const playNum = await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
    playNumIsNaN(playNum)
  }
}

export default App;
