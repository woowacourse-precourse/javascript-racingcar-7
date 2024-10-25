import { getInputCar } from './Input/carName.js';
import { getInputCount } from './Input/gameCount.js';
import { CAR_VALIDATION } from './Validator/carValidation.js';
class App {
  async run() {
    await this.inputValidate();
  }
  async inputValidate() {
    const inputCarName = await getInputCar();
    const inputGameCount = await getInputCount();
    CAR_VALIDATION(inputCarName);
  }
}

export default App;
