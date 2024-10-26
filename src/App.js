import RacingCar from "./models/Racingcar";
import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const carsStr = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분");
    const tryCount = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    const carsList = carsStr.split(",");

    const racingInstance = new RacingCar(carsList, tryCount);
  }
}

export default App;