import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js"
import { isValidNumber } from "./validation.js";

class App {
  async run() {
    try {
      const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const carList = Car.makeCarList(carName);

      const tryTime = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
      isValidNumber(tryTime);

      Car.race(carList, tryTime);

      Car.whoIsWinner(carList);

    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

export default App;
