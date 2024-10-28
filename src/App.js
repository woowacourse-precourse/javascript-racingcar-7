import { Console, Random } from '@woowacourse/mission-utils';
import carRoundPosition from './carRace/carRoundPosition';

class App {
  async getCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    const carNamesArr = carNames.split(',').map((name) => name.trim());

    if (carNamesArr.length < 2) throw '자동차는 두 대 이상 작성해주세요.';
    if (carNamesArr.some((carName) => carName.length > 5))
      throw '자동차 이름은 5글자 이하여야 합니다.';

    return carNamesArr;
  }

  async getRaceAttempts() {
    const raceAttempts = await Console.readLineAsync(
      '시도할 횟수를 입력하세요\n',
    );
    const attempts = parseInt(raceAttempts, 10);

    if (isNaN(attempts) || attempts <= 0)
      throw '시도 횟수는 1 이상의 숫자여야 합니다.';

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

    const maxPosition = Math.max(...raceResults.map((car) => car.position));
    const winners = raceResults
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  async run() {
    try {
      const carNames = await this.getCarNames();
      const raceAttempts = await this.getRaceAttempts();

      this.carRace(carNames, raceAttempts);
    } catch (error) {
      throw new Error('[ERROR] ' + error.message);
    }
  }
}

export default App;
