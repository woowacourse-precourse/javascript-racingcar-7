import { printRaceProgress } from '../views/output.js';
import generateRandomNumber from '../utils/random.js';

export default class Game {
  constructor(cars, rounds) {
    this.cars = cars;
    this.rounds = rounds;
  }

  playAllRounds() {
    for (let i = 1; i <= this.rounds; i += 1) {
      this.playSingleRound();
      printRaceProgress(this.cars);
    }
  }

  playSingleRound() {
    this.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();
      car.move(randomNumber);
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars.filter((car) => car.getPosition() === maxPosition);
  }
}
