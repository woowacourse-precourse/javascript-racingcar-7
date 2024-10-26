import { Console } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

const MOVE_MINIMUM = 4;

class App {
  async run() {
    try {
      const cars = await this.getCars();
      const attemps = await this.getAttemps();
      const winners = this.racingCar(cars, attemps);
      Console.print(`최종 우승자 : ${winners.join(', ')}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getCars() {
    const carNames = await this.inputCarNames();
    await this.checkNameLength(carNames);
    const cars = this.carNamesToObject(carNames);
    return cars;
  }

  async inputCarNames() {
    const carNames = (
      await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      )
    ).split(',');
    return carNames;
  }

  async checkNameLength(carNames) {
    const nameLength = carNames.some((name) => name.length > 5);
    if (nameLength)
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
  }

  carNamesToObject(carNames) {
    const cars = carNames.reduce((acc, name) => {
      acc[name] = 0;
      return acc;
    }, {});
    return cars;
  }

  async getAttemps() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  racingCar(cars, attemps) {
    Console.print('\n실행 결과');
    for (let i = 0; i < attemps; i++) {
      this.eachRound(cars);
    }
    return this.getWinners(cars);
  }

  eachRound(cars) {
    Object.entries(cars).forEach(([key, value]) => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      this.decideMovement(cars, randomNumber, key, value);
    });
    Console.print('');
  }

  decideMovement(cars, randomNumber, key, value) {
    if (randomNumber >= MOVE_MINIMUM) cars[key] = value + 1;
    Console.print(`${key} : ${cars[key]}`);
  }

  getWinners(cars) {
    const max = Math.max(...Object.values(cars));
    const winners = Object.keys(cars).filter((name) => cars[name] === max);
    return winners;
  }
}

export default App;
