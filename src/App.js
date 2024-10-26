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

class App {
  #totalRound = 0;

  #racers = [];

  async run() {
    const firstUserInput = await Console.readLineAsync(
      FIRST_USER_INPUT_PLACEHOLDER,
    );
    const secondUserInput = await Console.readLineAsync(
      SECOND_USER_INPUT_PLACEHOLDER,
    );

    this.#racers = firstUserInput.split(NAME_SEPARATOR).map((racer) => {
      if (racer.length > MAX_NAME_LENGTH) {
        throw new CustomError(ERROR_MESSAGES.LESS_THAN_FIVE_LETTERS);
      }
      return new Racer(racer);
    });
    this.#totalRound = Number(secondUserInput);

    this.racing = new Racing({
      totalRound: this.#totalRound,
      racers: this.#racers,
    });

    this.racing.start().getResultByRound();
    const winners = this.racing.getWinners();

    Console.print(`${OUTPUT_PREFIX} ${winners.join(', ')}`);
  }
}

export default App;
