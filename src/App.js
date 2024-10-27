import RacingCar from "./models/CarRaceGame.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const DELIMITER = ",";
const DEFAULT_POSITION = 0;

class App {
  #getCarProgressRecords(carsList) {
    return carsList.map((name) => ({
      name,
      position: DEFAULT_POSITION,
    }));
  }

  async run() {
    const carsStr = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carsList = carsStr.split(DELIMITER).map((name) => name.trim());

    const tryCount = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const carProgressRecords = this.#getCarProgressRecords(carsList);
    const carRaceGame = new RacingCar(carProgressRecords, tryCount);

    carRaceGame.startRace();
    carRaceGame.printRaceResults();
  }
}

export default App;
