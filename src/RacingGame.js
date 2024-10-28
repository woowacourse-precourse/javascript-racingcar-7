import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';

class RacingGame {
  constructor(carNames, rounds) {
    this.cars = carNames.map(name => new Car(name));
    this.rounds = rounds;
  }

  playRound() {
    this.cars.forEach(car => car.move());
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
  }

  displayResults() {
    this.cars.forEach(car => Console.print(`${car.name} : ${car.getPosition()}`));
    Console.print('');
  }
}

export default RacingGame;
