import { MissionUtils, Console } from '@woowacourse/mission-utils';
import RacingCars from './RacingCar.js';
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

  createRacingCar(car) {
    return new RacingCars(car);
  }

  createCarsList(cars) {
    cars.forEach((car) => {
      const racingCar = this.createRacingCar(car);
      this.carsAndPositions.push(racingCar);
    });
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  detemineMovingOrStop(randomNumber, carNumber) {
    if (randomNumber >= 4) {
      this.carsAndPositions[carNumber].moveForward();
    }
  }

  raceSingleRound() {
    this.carsAndPositions.forEach((_, carNumber) => {
      const randomNumber = this.getRandomNumber();
      this.detemineMovingOrStop(randomNumber, carNumber);
    });
  }

  showSingleRoundResult() {
    this.carsAndPositions.forEach((car) => {
      Console.print(car.showResult);
    });
    Console.print('\n');
  }

  startRacing(userCarInput, tryCount) {
    const cars = userCarInput.split(',');
    this.createCarsList(cars);
    for (let i = 0; i < tryCount; i++) {
      this.raceSingleRound();
      this.showSingleRoundResult();
    }
  }

  showRacingResult() {
    const maxPosition = Math.max(
      ...this.carsAndPositions.map((car) => car.position.length)
    );
    const winners = this.carsAndPositions.filter(
      (car) => car.position.length === maxPosition
    );
    Console.print(
      '최종 우승자 : ' + winners.map((winner) => winner.name).join(', ')
    );
  }

  validateUserInput(userCarInput, tryCount) {
    const cars = userCarInput.split(',');
    validateCarNameLength(cars);
    validateEmptyInput(cars);
    validateDuplicateCarName(cars);
    validateTryCountType(tryCount);
  }

  async run() {
    const userCarInput = await this.getCarNames();
    const tryCount = await this.getTryCount();
    this.validateUserInput(userCarInput, tryCount);
    Console.print('\n실행결과');
    this.startRacing(userCarInput, tryCount);
    this.showRacingResult();
  }
}

export default App;
