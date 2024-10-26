import { getInputCar } from './Input/carName.js';
import { getInputCount } from './Input/gameCount.js';
import { CAR_VALIDATION } from './Validator/carValidation.js';
import { GAME_VALIDATION } from './Validator/gameValidation.js';
import { getRandomNumbers, changeCarPosition } from './Race/race.js';
class App {
  async run() {
    await this.inputValidate();
    await this.startRace();
  }
  async inputValidate() {
    const inputCarName = await getInputCar();
    const inputGameCount = await getInputCount();
    CAR_VALIDATION(inputCarName);
    GAME_VALIDATION(inputGameCount);
    this.inputGameCount = Number(inputGameCount);
    this.inputCarNames = inputCarName.split(',');
  }
  //경주시작
  async startRace() {
    const cars = this.inputCarNames.map((name) => ({ name, position: 0 }));
  }
}

export default App;
