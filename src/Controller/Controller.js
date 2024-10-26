import Car from '../Model/Car.js';
import { getInput, printCarPositions, printWinners } from '../View/View.js';
import {
  validateCarNames,
  validateCars,
  validateRounds,
} from './Validation.js';
import { getWinners } from '../Util/util.js';
import runRounds from '../Util/runRounds.js';

// Controller에서 전체 로직을 처리

class Controller {
  async run() {
    const carNames = await getInput('자동차 이름을 입력해 주세요');
    const validatedCarNames = validateCarNames(carNames);

    const roundsInput = await getInput('시도할 횟수는 몇 회인가요?');
    const validatedRounds = validateRounds(roundsInput);

    const cars = validatedCarNames.map((carName) => new Car(carName));
    const validatedCars = validateCars(cars);

    runRounds(validatedCars, validatedRounds, printCarPositions);

    const maxPosition = Math.max(...validatedCars.map((car) => car.position));
    const winners = getWinners(cars, maxPosition);

    printWinners(winners);
  }
}

export default Controller;
