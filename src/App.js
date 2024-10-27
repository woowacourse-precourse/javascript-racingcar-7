import { getInputCar } from './Input/carName.js';
import { getInputCount } from './Input/gameCount.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { CAR_VALIDATION } from './Validator/carValidation.js';
import { GAME_VALIDATION } from './Validator/gameValidation.js';
import Race from './Race/race.js';
import { gameStartComment } from './Output/outPut.js';
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
  async startRace() {
    gameStartComment();
    const race = new Race(this.inputCarNames, this.inputGameCount);
    await race.startRace();
  }
}
export default App;
