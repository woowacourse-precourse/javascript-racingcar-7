import getRandomNumber from '../utils/random.js';
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

  playOneRound() {
    this.cars.forEach((car) => {
      const moveNumber = getRandomNumber();
      car.move(moveNumber);
    });
    this.currentRound += 1;
  }

  findWinners() {
    const furthestPosition = this.getFurthestPosition();
    return this.getCarsByPosition(furthestPosition);
  }

  getFurthestPosition() {
    const positions = this.cars.map((car) => car.getPosition());
    return Math.max(...positions);
  }

  getCarsByPosition(targetPosition) {
    return this.cars.filter((car) => car.getPosition() === targetPosition);
  }

  isGameFinished() {
    return this.currentRound >= this.totalRounds;
  }
}

export default RacingGame;
