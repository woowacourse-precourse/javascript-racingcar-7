import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Game {
  #cars;
  #round;

  constructor(cars, round) {
    this.#cars = cars.map((car) => new Car(car));
    this.#round = round;
  }

  play() {
    for (let i = 0; i < this.#round; i++) {
      this.#startRound();
      this.#printScore();
    }
  }

  #startRound() {
    this.#cars.forEach((car) => {
      car.run();
    });
  }

  #printScore() {
    this.#cars.forEach((car) => {
      car.display();
    });
  }

  getWinner() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));
    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }

  printResult() {
    const winner = this.getWinner();
    Console.print(`최종 우승자 : ${winner.map((car) => car.getName()).join(', ')}`);
  }
}

export default Game;
