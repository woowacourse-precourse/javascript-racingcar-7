import { Console, Random } from '@woowacourse/mission-utils';
import carRoundPosition from './carRace/carRoundPosition.js';
import printRacetWinner from './carRace/printRacetWinner.js';
import { errorConstans } from './errorConstans.js';

class App {
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNamesArr = carNames.split(',').map((name) => name.trim());

    if (carNamesArr.length < 2) throw errorConstans.ERROR_CARNUM;
    if (carNamesArr.some((carName) => carName.length > 5))
      throw errorConstans.ERROR_CARNAME_VALIDATION;

    return carNamesArr;
  }

  async getRaceAttempts() {
    const raceAttempts = await Console.readLineAsync(
      '시도할 횟수를 입력하세요\n',
    );
    const attempts = parseInt(raceAttempts, 10);

    if (isNaN(attempts) || attempts <= 0)
      throw errorConstans.ERROR_MIN_RACE_ATTEMP;

    return attempts;
  }

  carRace(carNames, raceAttempts) {
    const raceResults = carNames.map((name) => ({
      name,
      position: 0,
    }));

    for (let i = 0; i < raceAttempts; i++) {
      carRoundPosition(raceResults);
    }
    printRacetWinner(raceResults);
  }

  async run() {
    try {
      const carNames = await this.getCarNames();
      const raceAttempts = await this.getRaceAttempts();

      this.carRace(carNames, raceAttempts);
    } catch (error) {
      throw new Error('[ERROR] ' + error);
    }
  }
}

export default App;
