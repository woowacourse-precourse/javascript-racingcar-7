//@ts-check

import { GAME_MESSAGE } from '../constants/messages.js';
import User from '../user/User.js';

class Game {
  constructor() {
    this.user = new User();
  }
  async process() {
    const input = this.user.readUserInput(GAME_MESSAGE.START);
  }
}

export default Game;
