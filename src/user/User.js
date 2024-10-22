//@ts-check

import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/messages.js';

class User {
  /**
   * @returns {Promise<string>}
   */
  async readCarNameInput() {
    return Console.readLineAsync(GAME_MESSAGE.START);
  }

  async readAttemptsInput() {
    return Console.readLineAsync(GAME_MESSAGE.ATTEMPTS);
  }
}

export default User;
