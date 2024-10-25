import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
  constructor() {
    this.cars = [];
  }

  createCars(names) {
    this.cars = names.map((name) => new Car(name));
  }

  attempt() {
    this.cars.forEach((car) => {
      car.tryMove();
      Console.print(`${car.name} : ${'-'.repeat(car.score)}`);
    });
  }

  repeatAttempts(attempts) {
    Console.print('\n실행 결과');
    for (let attemptCount = attempts; attemptCount > 0; attemptCount -= 1) {
      this.attempt();
      Console.print('');
    }
  }

  getHighestScore() {
    return this.cars.reduce((acc, cur) => (acc = Math.max(acc, cur.score)), 0);
  }

  getWinner(highestScore) {
    const winningCars = this.cars.filter((car) => car.score === highestScore);
    const winningCarsName = winningCars.map((car) => car.name);
    this.winner = winningCarsName.join(', ');
  }

  play(names, counts) {
    this.createCars(names);
    this.repeatAttempts(counts);
    this.getWinner(this.getHighestScore());

    return this.winner;
  }
}

export default RacingGame;
