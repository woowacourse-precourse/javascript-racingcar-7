import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/GameMessage.js';

class Output {
  static async printResultHeader() {
    return Console.print('\n' + GAME_MESSAGE.resultHeader);
  }
}

export default Output;
