import { getInputCar } from './Input/carName.js';
import { getInputCount } from './Input/gameCount.js';
import { CAR_VALIDATION } from './Validator/carValidation.js';
import { GAME_VALIDATION } from './Validator/gameValidation.js';
class App {
  async run() {
    await this.inputValidate();
  }
  async inputValidate() {
    const inputCarName = await getInputCar();
    const inputGameCount = await getInputCount();
    console.log(inputGameCount);
    CAR_VALIDATION(inputCarName);
    GAME_VALIDATION(inputGameCount);
  }
}

export default App;
