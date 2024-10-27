import { Console } from '@woowacourse/mission-utils';
import Racer from './Racer.js';
import Racing from './Racing.js';
import CustomError from './Error.js';
import ERROR_MESSAGES from './constants/error.js';
import {
  FIRST_USER_INPUT_PLACEHOLDER,
  SECOND_USER_INPUT_PLACEHOLDER,
  NAME_SEPARATOR,
  MAX_NAME_LENGTH,
  OUTPUT_PREFIX,
} from './constants/index.js';
import Winners from './Winners.js';

class App {
  #totalRound = 0;

  #racers = [];

  async run() {
    await this.#setRacers();
    await this.#setTotalRound();

    this.#startRacing();

    const winners = this.#getWinners();

    Console.print(`${OUTPUT_PREFIX} ${winners}`);
  }

  async #setTotalRound() {
    const secondUserInput = await Console.readLineAsync(
      SECOND_USER_INPUT_PLACEHOLDER,
    );

    this.#totalRound = secondUserInput;
  }

  async #setRacers() {
    const firstUserInput = await Console.readLineAsync(
      FIRST_USER_INPUT_PLACEHOLDER,
    );

    const racers = firstUserInput.split(NAME_SEPARATOR).map((racer) => {
      if (racer.length > MAX_NAME_LENGTH) {
        throw new CustomError(ERROR_MESSAGES.LESS_THAN_FIVE_LETTERS);
      }
      return new Racer(racer);
    });

    this.#racers = racers;
  }

  #startRacing() {
    this.racing = new Racing({
      totalRound: this.#totalRound,
      racers: this.#racers,
    }).start();
  }

  #getWinners() {
    this.winners = new Winners(this.#racers);
    return this.winners.getWinners();
  }
}

export default App;
