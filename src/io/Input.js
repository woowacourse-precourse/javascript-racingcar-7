import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/GameMessage.js';
class Input {
  static async getCarName() {
    return await Console.readLineAsync(GAME_MESSAGE.readCarName);
  }
}
export default Input;
