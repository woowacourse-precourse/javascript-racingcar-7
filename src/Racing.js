import { Console, Random } from '@woowacourse/mission-utils';

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
      Console.print(this.#getResultByRound().join('\n'));
    }
    return this;
  }

  #moveForward() {
    this.#racers.forEach((racer) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        racer.addScore();
      }
    });
  }

  #getResultByRound() {
    return this.#racers.map(
      (racer) => `${racer.getName()} : ${racer.getRaceLine()}`,
    );
  }
}

export default Racing;
