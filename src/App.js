import { MissionUtils, Console } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';
import {
  validateEmptyInput,
  validateCarNameLength,
  validateDuplicateCarName,
  validateTryCountType,
} from './validation.js';

class App {
  carsAndPositions = [];

  async getCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n'
    );
  }

  async getTryCount() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  createCarsList(cars) {
    cars.forEach((car) => {
      const racingCar = new RacingCar(car);
      this.carsAndPositions.push(racingCar);
    });
  }

  moveForwardOrStop(carNumber) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.carsAndPositions[carNumber].moveForward();
    }
  }

  raceSingleRound() {
    this.carsAndPositions.forEach((_, carNumber) =>
      this.moveForwardOrStop(carNumber)
    );
  }

  showSingleRoundResult() {
    this.carsAndPositions.forEach((car) => Console.print(car.showResult));
    Console.print('\n');
  }

  startRacing(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.raceSingleRound();
      this.showSingleRoundResult();
    }
  }

  getMaxPosition() {
    return Math.max(...this.carsAndPositions.map((car) => car.position.length));
  }

  getWinners() {
    const maxPosition = this.getMaxPosition();
    return this.carsAndPositions.filter(
      (car) => car.position.length === maxPosition
    );
  }

  showFinalResult() {
    const winners = this.getWinners();
    Console.print(
      '최종 우승자 : ' + winners.map((winner) => winner.name).join(', ')
    );
  }

  validateUserInput(cars, tryCount) {
    validateCarNameLength(cars);
    validateEmptyInput(cars);
    validateDuplicateCarName(cars);
    validateTryCountType(tryCount);
  }

  async run() {
    const userCarInput = await this.getCarNames();
    const tryCount = await this.getTryCount();

    const cars = userCarInput.split(',');
    this.validateUserInput(cars, tryCount);
    this.createCarsList(cars);
    Console.print('\n실행결과');
    this.startRacing(tryCount);
    this.showFinalResult();
  }
}

export default App;
