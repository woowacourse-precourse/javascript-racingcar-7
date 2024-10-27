import { Console, Random } from '@woowacourse/mission-utils';
import { MIN_RANDOM_SCORE } from './constants/index.js';

class Racing {
  #totalRound = 0;

  #racers = [];

  constructor({ totalRound, racers }) {
    this.#totalRound = totalRound;
    this.#racers = racers;
  }

  start() {
    for (let i = 0; i < this.#totalRound; i += 1) {
      this.#moveForward();
      Console.print(this.#printResultByRound());
    }
    return this;
  }

  #moveForward() {
    this.#racers.forEach((racer) => {
      if (Random.pickNumberInRange(0, 9) >= MIN_RANDOM_SCORE) {
        racer.addScore();
      }
    });
  }

  #printResultByRound() {
    return this.#racers
      .map((racer) => `${racer.getName()} : ${racer.getRaceLine()}`)
      .join('\n');
  }
}

export default Racing;
