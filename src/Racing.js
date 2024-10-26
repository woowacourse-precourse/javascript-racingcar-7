import { Console, Random } from '@woowacourse/mission-utils';

class Racing {
  #totalRound = 0;

  #racers = [];

  #resultByRound = [];

  constructor({ totalRound, racers }) {
    this.#totalRound = totalRound;
    this.#racers = racers;
  }

  go() {
    this.#racers.forEach((racer) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        racer.addScore();
      }
    });

    return this;
  }

  start() {
    for (let i = 0; i < this.#totalRound; i++) {
      this.#resultByRound = [];
      this.go();
      Console.print(this.getResultByRound().join('\n'));
    }
    return this;
  }

  getResultByRound() {
    this.#racers.forEach((racer) => {
      this.#resultByRound.push(`${racer.getName()} : ${racer.getRaceLine()}`);
    });

    return this.#resultByRound;
  }
}

export default Racing;
