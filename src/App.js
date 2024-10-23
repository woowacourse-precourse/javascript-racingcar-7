import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from './constant/index.js';
import Car from './Car.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    const carNameArr = await this.setCars();
    const tryNumber = await this.setTryNumber();

    const cars = carNameArr.map((carName) => new Car(carName));

    this.gameStart(cars, tryNumber);
    this.result(cars);
  }

  async setCars() {
    const input = await InputView.readCarNames();
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
    const input = await InputView.readTryNumber();

    if (Number.isNaN(Number(input))) {
      throw new Error(ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR);
    }

    if (Number(input) <= 0) {
      throw new Error(ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR);
    }

    return input;
  }

  gameStart(cars, tryNumber) {
    OutputView.racingStartIntro();

    for (let i = 0; i < tryNumber; i += 1) {
      cars.forEach((car) => {
        const randomNumber = this.getRandomNumber();
        this.tryMove(car, randomNumber);

        const { name, distance } = car.getCarInformation();
        OutputView.printCarState(name, distance);
      });

      OutputView.printBlankLine();
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

  result(cars) {
    const winners = this.judgeWinner(cars);
    OutputView.printWinner(winners);
  }

  judgeWinner(cars) {
    const max = Math.max(...cars.map((car) => car.getCarInformation().distance));
    const winners = cars
      .filter((car) => car.getCarInformation().distance === max)
      .map((car) => car.getCarInformation().name);

    return winners;
  }
}

export default App;
