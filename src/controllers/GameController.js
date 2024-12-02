import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import { InputParser } from '../utils/Parser.js';

class GameController {
  async start() {
    const CarNames = await InputView.inputCarNames();
    const tryNumber = await InputView.inputTryNumber();
  }
}

export default GameController;
