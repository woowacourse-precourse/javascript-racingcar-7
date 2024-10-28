import RaceGameController from '../controller/RaceGameController.js';
import { MESSAGE, POSITION_MARKER, WINNER_SEPERATOR } from '../constants/UI.js';

class RaceGameView {
  #io;

  constructor (io) {
    this.#io = io;
  }

  async getCarNames () {
    const input = await this.#io.in(MESSAGE.PLEASE_INPUT_CAR_NAMES);
    return RaceGameController.onGetRaceCarNames(input);
  }

  async getIteration () {
    const input = await this.#io.in(MESSAGE.PLEASE_INPUT_ITERATION_NUMBER);
    return RaceGameController.onGetIteration(input);
  }

  showStatus (cars) {
    const outputMessages = [];
    for (const car of cars) {
      const { name, move } = car;
      outputMessages.push(`${name} : ${POSITION_MARKER.repeat(move)}\n`);
    }
    this.#io.out(outputMessages.join(''));
  }

  showWinner (winners) {
    const message = `${MESSAGE.WINNER} ${MESSAGE.DELIMITER} ${winners.join(WINNER_SEPERATOR)}`;
    this.#io.out(message);
  }

  out (message) {
    this.#io.out(message);
  }
}

export default RaceGameView;
