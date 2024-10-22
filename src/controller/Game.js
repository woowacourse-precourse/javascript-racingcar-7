//@ts-check

import { GAME_MESSAGE } from '../constants/messages.js';
import User from '../user/User.js';

class Game {
  constructor() {
    this.user = new User();
  }
  async process() {
    const carNameInput = await this.user.readCarNameInput();
    const attempts = await this.user.readAttemptsInput();
  }
}

export default Game;
