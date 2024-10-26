import { Console, Random } from '@woowacourse/mission-utils';

class Racing {
  #totalRound = 0;

  #racers = [];

  #maxScore = 0;

  #winners = [];

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

  getWinners() {
    this.#racers.forEach((racer) => {
      if (racer.getScore() === this.getMaxScore()) {
        this.#winners.push(racer.getName());
      }
    });

    return this.#winners;
  }

  getMaxScore() {
    const scoreList = this.#racers.map((racer) => racer.getScore());
    this.#maxScore = Math.max(...scoreList);

    return this.#maxScore;
  }
}

export default Racing;
