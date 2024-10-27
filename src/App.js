import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGES, ERROR_MESSAGES } from './constants';

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const tryCount = await this.getTryCount();
      const cars = this.createCars(carNames);
      this.startRace(cars, tryCount);
      this.printWinners(cars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getCarNames() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
    const names = input.split(',');
    if (!this.validateNameLengths(names)) {
      throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH);
    }
    if (!this.validateNoEmptyNames(names)) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    if (!this.validateNoDuplicateNames(names)) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }

    return names;
  }

  async getTryCount() {
    const input = await Console.readLineAsync(MESSAGES.INPUT_TRY_COUNT);
    const count = Number(input);
    if (this.validateTryCount(count)) {
      return count;
    } else {
      throw new Error(ERROR_MESSAGES.INVALID_TRY_COUNT);
    }
  }

  validateNameLengths(names) {
    return names.every((name) => name.length <= 5);
  }

  validateNoEmptyNames(names) {
    return names.every((name) => name.trim() !== '');
  }

  validateNoDuplicateNames(names) {
    return new Set(names).size === names.length;
  }

  validateTryCount(count) {
    return Number.isInteger(count) && count > 0;
  }

  createCars(names) {
    return names.map((name) => ({ name, position: 0 }));
  }

  startRace(cars, tryCount) {
    Console.print(MESSAGES.EXECUTION_RESULT);
    for (let i = 0; i < tryCount; i += 1) {
      cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          car.position += 1;
        }
        Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
      });
      Console.print('');
    }
  }

  printWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    Console.print(MESSAGES.FINAL_WINNER(winners));
  }
}

export default App;
