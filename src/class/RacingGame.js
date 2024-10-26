import Cars from './Cars.js';

class RacingGame {
  constructor(names) {
    this.cars = new Cars(names);
  }

  getHighestScore() {
    const scores = this.cars.getScores();
    return scores.reduce((acc, cur) => Math.max(acc, cur), 0);
  }

  getWinner() {
    const highestScore = this.getHighestScore();
    const winners = this.cars.getNamesByScore(highestScore);
    const winnerNameString = winners.join(', ');

    return winnerNameString;
  }

  play(counts) {
    this.cars.race(counts);
    return this.getWinner();
  }
}

export default RacingGame;
