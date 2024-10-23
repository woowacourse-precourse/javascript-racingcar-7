import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE } from './constant/index.js';
import Car from './Car.js';

class App {
  async run() {
    const carNameArr = await this.setCars();
    const tryNumber = await this.setTryNumber();

    const cars = carNameArr.map((carName) => new Car(carName));

    this.gameStart(cars, tryNumber);
  }

  async setCars() {
    const input = await Console.readLineAsync(GAME_MESSAGE.CAR_NAME_INPUT);
    const carNameArr = input.split(',');

    if (carNameArr.some((name) => name === '')) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY);
    }

    if (carNameArr.some((name) => name.split('').find((char) => char === ' '))) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP);
    }

    if (carNameArr.length !== new Set(carNameArr).size) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION);
    }

    if (carNameArr.some((name) => name.length > 5)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE);
    }

    return carNameArr;
  }

  async setTryNumber() {
    const input = await Console.readLineAsync(GAME_MESSAGE.TRY_NUMBER_INPUT);

    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR);
    }

    if (Number(input) <= 0) {
      throw new Error(ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR);
    }

    return input;
  }

  gameStart(cars, tryNumber) {
    Console.print('\n실행 결과');

    for (let i = 0; i < tryNumber; i += 1) {
      cars.forEach((car) => {
        const randomNumber = this.getRandomNumber();
        this.tryMove(car, randomNumber);
      });

      const join = cars.map((car) => car.parseDistanceToString()).join('\n');

      Console.print(`${join}\n`);
    }
  }

  tryMove(car, randomNumber) {
    if (randomNumber >= 4) {
      return car.move();
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }
}

export default App;
