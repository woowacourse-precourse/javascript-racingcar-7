import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import { InputParser } from '../utils/Parser.js';

class GameController {
  async start() {
    const carName = await InputView.inputCarNames();
    const parse = InputParser.parseNamesToArray(carName);
    Console.print(parse);
  }
}

export default GameController;
