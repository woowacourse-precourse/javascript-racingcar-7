import { Cars } from './index.js';

class RacingGame {
  constructor(names) {
    this.cars = new Cars(names);
  }

  play(counts) {
    this.cars.race(counts);
    return this.getWinner();
  }

  getWinner() {
    const highestScore = this.getHighestScore();
    const winners = this.cars.getNamesByScore(highestScore);
    const winnerNameString = winners.join(', ');

    return winnerNameString;
  }

  getHighestScore() {
    const scores = this.cars.getScores();
    return scores.reduce((acc, cur) => Math.max(acc, cur), 0);
  }
}

export default RacingGame;
