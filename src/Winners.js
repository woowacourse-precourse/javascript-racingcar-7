class Winners {
  #winners = [];

  #racers = [];

  #maxScore = 0;

  constructor(racers) {
    this.#racers = racers;
    this.#findMaxScore();
    this.#findWinners();
  }

  getWinners() {
    return this.#winners.join(',');
  }

  #findWinners() {
    this.#racers.forEach((racer) => {
      if (racer.getScore() === this.#maxScore) {
        this.#winners.push(racer.getName());
      }
    });
  }

  #findMaxScore() {
    const scoreList = this.#racers.map((racer) => racer.getScore());
    this.#maxScore = Math.max(...scoreList);
  }
}

export default Winners;
