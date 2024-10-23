import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class RacingGame {
  constructor() {
    this.cars = [];
  }

  createCars(nameString) {
    const names = nameString.split(',');
    this.cars = names.map((name) => new Car(name));
  }

  doTry() {
    this.cars.forEach((car) => {
      car.tryMove();
      Console.print(`${car.name} : ${'-'.repeat(car.score)}`);
    });
  }

  repeatTries(tries) {
    Console.print('\n실행 결과');
    for (let tryCount = tries; tryCount > 0; tryCount -= 1) {
      this.doTry();
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

  play(nameString, tries) {
    this.createCars(nameString);
    this.repeatTries(tries);
    this.getWinner(this.getHighestScore());

    return this.winner;
  }
}

export default RacingGame;
