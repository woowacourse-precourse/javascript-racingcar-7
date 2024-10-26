import RacingCar from "./models/CarRaceGame.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const DELIMITER = ",";
class App {
  createCarProgressRecords(carsStr) {
    return carsStr.split(DELIMITER).map((name) => ({
      name,
      position: 0,
    }));
  }

  async run() {
    const carsStr = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const tryCount = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const carProgressRecords = this.createCarProgressRecords(carsStr);

    const carRaceGame = new RacingCar(carProgressRecords, tryCount);

    carRaceGame.startRace();
  }
}

export default App;
