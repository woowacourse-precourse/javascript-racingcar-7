import getUserInput from './utils/getUserInput.js';
import INPUT_OUTPUT_MESSAGES from './constants/inputOutputMessages.js';
import CarValidator from './CarValidator.js';
import CountValidator from './CountValidator.js';

class App {
  async run() {
    const inputCars = await getUserInput(INPUT_OUTPUT_MESSAGES.INPUT_CAR);
    const carValidator = new CarValidator(inputCars);
    const cars = carValidator.validateCars();

    const inputCount = await getUserInput(INPUT_OUTPUT_MESSAGES.INPUT_COUNT);
    const countValidator = new CountValidator(inputCount);
    const count = countValidator.validateCount();
  }
}

export default App;
