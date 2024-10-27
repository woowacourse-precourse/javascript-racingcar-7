import getUserInput from './utils/getUserInput.js';
import INPUT_OUTPUT_MESSAGES from './constants/inputOutputMessages.js';
import CarValidator from './CarValidator.js';

class App {
  async run() {
    const inputCars = await getUserInput(INPUT_OUTPUT_MESSAGES.INPUT_CAR);
    const carValidator = new CarValidator(inputCars);
    const cars = carValidator.validateCars();
  }
}

export default App;
