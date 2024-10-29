//@ts-check

import { Console } from '@woowacourse/mission-utils';

class User {
  /**
   * @param {string} message
   * @returns {Promise<string>}
   */
  async readUserInput(message) {
    return Console.readLineAsync(message);
  }
}

export default User;
