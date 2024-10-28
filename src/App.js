import Racingcar from './racingcar.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.racingcar = new Racingcar();
  }

  async run() {
    try {
      const carNames = await this.getVerifiedCarNames();
      const counts = await this.getVerifiedCounts();
      this.carRaing(carNames, counts);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getVerifiedCarNames() {
    const inputCar = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
    );
    this.racingcar.verifyCarNames(inputCar);
    return inputCar;
  }

  async getVerifiedCounts() {
    const inputCount = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );
    this.racingcar.verifyCounts(inputCount);
    return inputCount;
  }

  carRaing(carNames, counts) {
    this.racingcar.setCarsAndCounts(carNames, counts);
    Console.print(`실행 결과`);
    this.racingcar.startRace();
  }
}

export default App;
