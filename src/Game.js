import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Game {
  #winners = [];

  #cars = [];

  #totalRounds;

  #roundRecord;

  constructor(cars, totalRounds) {
    this.#cars = cars.map((car) => new Car(car));
    this.#totalRounds = totalRounds;
    this.#roundRecord = '';
  }

  start() {
    Console.print('\n실행 결과\n');
    for (let i = 0; i < this.#totalRounds; i++) {
      this.#playRound();
      this.#printRoundResult();
    }
    this.#determineWinners();
  }

  #playRound() {
    this.#cars.forEach((car) => {
      car.move();
      this.#roundRecord += `${car.record()} \n`;
    });
  }

  #determineWinners() {
    let maxScore = 0;

    this.#cars.forEach((car) => {
      const { score } = car;
      if (maxScore > score) return;

      if (score > maxScore) {
        this.#winners.length = 0;
        maxScore = score;
      }

      this.#winners.push(car.name);
    });

    this.#winners.join(', ');
  }

  #printRoundResult() {
    Console.print(this.#roundRecord);
    this.#roundRecord = '';
  }

  printGameResult() {
    Console.print(`최종 우승자 : ${this.#winners}`);
  }
}

export default Game;
