import { Console } from '@woowacourse/mission-utils';
import Racer from './Racer.js';
import Racing from './Racing.js';
import {
  FIRST_USER_INPUT_PLACEHOLDER,
  SECOND_USER_INPUT_PLACEHOLDER,
  NAME_SEPARATOR,
  OUTPUT_PREFIX,
} from './constants/index.js';
import Winners from './Winners.js';
import Validator from './Validator.js';

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

    Validator.validateEmptyUserInput(secondUserInput);
    this.#totalRound = secondUserInput;
  }

  async #setRacers() {
    const firstUserInput = await Console.readLineAsync(
      FIRST_USER_INPUT_PLACEHOLDER,
    );

    Validator.validateSeparator(firstUserInput);
    Validator.validateEmptyUserInput(firstUserInput);
    const racers = firstUserInput.split(NAME_SEPARATOR).map((racer) => {
      Validator.validateMaxRacerName(racer);
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
