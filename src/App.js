import CarValidator from './Validator/CarValidator.js';
import CountValidator from './Validator/CountValidator.js';
import CarRacing from './CarRacing.js';
import { getUserInput } from './utils/inputOutput.js';
import INPUT_OUTPUT_MESSAGES from './constants/inputOutputMessages.js';

class App {
  async run() {
    const inputCars = await getUserInput(INPUT_OUTPUT_MESSAGES.INPUT_CAR);
    const cars = CarValidator.validateCars(inputCars);

    const inputCount = await getUserInput(INPUT_OUTPUT_MESSAGES.INPUT_COUNT);
    const count = CountValidator.validateCount(inputCount);

    const carRacing = new CarRacing(cars, count);
    carRacing.start();
    carRacing.printWinner();
  }
}

export default App;
