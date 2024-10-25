import Car from './car.js';

class RacingGame {
  cars;

  totalRounds;

  currentRound;

  constructor(carNames, rounds) {
    this.cars = carNames.map((name) => new Car(name));
    this.totalRounds = Number(rounds);
    this.currentRound = 0;
  }

  getCars() {
    return this.cars;
  }

  getTotalRounds() {
    return this.totalRounds;
  }

  getCurrentRound() {
    return this.currentRound;
  }
}

export default RacingGame;
