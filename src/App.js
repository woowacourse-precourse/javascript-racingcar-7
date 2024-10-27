import RacingCar from "./models/CarRaceGame.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const DELIMITER = ",";
const DEFAULT_POSITION = 0;
const PROMPT_MESSAGES = {
  CAR_NAMES: "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
};

class App {
  async #getCarNames() {
    const carsStr = await MissionUtils.Console.readLineAsync(
      PROMPT_MESSAGES.CAR_NAMES
    );
    const carNameList = carsStr.split(DELIMITER).map((name) => name.trim());
    return carNameList;
  }

  async #getTryCount() {
    const tryCountStr = await MissionUtils.Console.readLineAsync(
      PROMPT_MESSAGES.TRY_COUNT
    );
    return parseFloat(tryCountStr);
  }

  #getCarProgressRecords(carNameList) {
    return carNameList.map((carName) => ({
      name: carName,
      position: DEFAULT_POSITION,
    }));
  }

  async run() {
    const carNameList = await this.#getCarNames();
    const tryCount = await this.#getTryCount();

    const carProgressRecords = this.#getCarProgressRecords(carNameList);
    const carRaceGame = new RacingCar(carProgressRecords, tryCount);

    carRaceGame.startRace();
    carRaceGame.printRaceResults();
  }
}

export default App;
