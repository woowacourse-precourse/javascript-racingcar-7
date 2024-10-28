import { printResult, readUserInput } from './util/missionUtil.js';
import { RESULT_MESSAGE, START_MESSAGE } from './util/constant.js';
import Car from './Car.js';
import { validCarName, validTryNumber } from './util/validation.js';
import { getWinner } from './util/handleWinner.js';

class Race {
  #cars;
  #tryNumber;

  async play() {
    await this.processCars();
    await this.processTryNumber();
    await this.executeResult();
    await this.winnerResult();
  }

  async processCars() {
    const CARS = await readUserInput(START_MESSAGE.CAR_NAME_INPUT);
    const CARS_NAME = CARS.split(',').map((car) => car.trim());
    validCarName(CARS_NAME);
    this.setCar(CARS_NAME);
  }

  async processTryNumber() {
    const TRY_NUMBER = await readUserInput(START_MESSAGE.TRY_NUMBER_INPUT);
    validTryNumber(TRY_NUMBER);
    this.setTryNumber(TRY_NUMBER);
  }

  setTryNumber(number) {
    this.#tryNumber = number;
  }

  setCar(cars) {
    this.#cars = cars.map((carName) => new Car(carName));
  }

  async executeResult() {
    await printResult(RESULT_MESSAGE.EXECUTE);

    while (this.#tryNumber > 0) {
      const DISTANCE_RESULT = await Promise.all(
        this.#cars.map((car) => car.getMoveForwardResult())
      );

      await printResult(DISTANCE_RESULT.join(''));

      this.#tryNumber -= 1;
    }
  }

  async winnerResult() {
    const CAR_DISTANCE_ARRAY = this.#cars.map(
      (car) => car.getDistance().length
    );
    const MAX_DISTANCE = Math.max(...CAR_DISTANCE_ARRAY);
    const WINNER = await getWinner(this.#cars, MAX_DISTANCE);
    await printResult(`${RESULT_MESSAGE.WINNER} ${WINNER.join(', ')}`);
  }
}

export default Race;
