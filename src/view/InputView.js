import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/MESSAGE.js';
import Car from '../model/Car.js';
import GameCountValidator from '../utils/validators/GameCountValidator.js';

class InputView {
  constructor() {
    this.car = new Car();
    this.gameCountValidator = new GameCountValidator();
  }

  async getCarNameInput() {
    let userCarName = await Console.readLineAsync(MESSAGE.CAR_NAME_PROMPT);
    userCarName = this.car.getUserCarNameList(userCarName);
    return userCarName;
  }

  async getGameCountInput() {
    const gameCount = await Console.readLineAsync(MESSAGE.GAME_ROUND_PROMPT);
    this.gameCountValidator.runAllFunction(gameCount);
    return gameCount;
  }
}

export default InputView;
