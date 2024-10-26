import Car from '../Model/Car.js';
import { getInput, printCarPositions, printWinners } from '../View/View.js';
import {
  validateCarNames,
  validateCars,
  validateRounds,
} from '../Validation/Validation.js';
import getWinners from '../Util/getWinners.js';
import runRounds from '../Util/runRounds.js';
import SYSTEM_MESSAGES from '../Model/SystemMessages.js';

// Controller에서 전체 로직을 처리

class Controller {
  async run() {
    const carNames = await getInput(SYSTEM_MESSAGES.ASK_CARS_NAME);
    const validatedCarNames = validateCarNames(carNames);

    const roundsInput = await getInput(SYSTEM_MESSAGES.ASK_ROUNDS);
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
