import { Console, Random } from '@woowacourse/mission-utils';
import DEFINITION from '../constants/Definition.js';
import MESSAGE from '../constants/Message.js';
import OutputView from '../views/OutputView.js';

class Car {
  #cars;

  constructor() {
    this.#cars = [];
  }

  addCar(names) {
    names.forEach((car) => {
      const carList = {
        name: car,
        advance: 0,
      };
      this.#cars.push(carList);
    });
  }

  printCars() {
    Console.print(this.#cars);
  }

  pickRandomValue() {
    const randomValue = Random.pickNumberInRange(
      DEFINITION.CONDITION.RANDOM_NUMBER_MINIMUM,
      DEFINITION.CONDITION.RANDOM_NUMBER_MAXIMUM,
    );
    if (
      randomValue < DEFINITION.CONDITION.RANDOM_NUMBER_MINIMUM ||
      randomValue > DEFINITION.CONDITION.RANDOM_NUMBER_MAXIMUM
    ) {
      throw new Error(MESSAGE.ERROR.IS_NOT_RANDOM_RANGE);
    }
    return randomValue;
  }

  isAdvance() {
    const randomNumber = this.pickRandomValue();
    if (randomNumber >= DEFINITION.CONDITION.MINIMUM_ADVANCE) {
      return 1;
    }
    if (randomNumber < DEFINITION.CONDITION.MINIMUM_ADVANCE) {
      return 0;
    }
  }

  roundProcess() {
    const roundResult = [];
    this.#cars.forEach((car) => {
      car.advance += this.isAdvance();
      const carResult = {
        name: car.name,
        advance: this.generateAdvanceSymbol(car.advance),
      };
      roundResult.push(carResult);
    });

    return roundResult;
  }

  pickWinnerNames() {
    const winnerNames = [];
    const isAdanceArray = this.#cars.map((i) => i.advance);
    const isMaxAdvance = Math.max(...isAdanceArray);
    const isWinners = this.#cars.filter((i) => i.advance === isMaxAdvance);
    isWinners.forEach((i) => {
      winnerNames.push(i.name);
    });

    return winnerNames;
  }

  generateAdvanceSymbol(advance) {
    return DEFINITION.SYMBOL.ADVANCE.repeat(advance);
  }
}

export default Car;
