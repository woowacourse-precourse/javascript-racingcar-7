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
    }
    this.#determineWinners();
  }

  #playRound() {
    this.#cars.forEach((car) => {
      // 자동차 움직이고
      car.move();
      // 점수 기록하고
      this.#roundRecord += `${car.record()} \n`;
    });
    Console.print(this.#roundRecord);
    this.#roundRecord = '';
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

  printGameResult() {
    Console.print(`최종 우승자 : ${this.#winners}`);
  }
}

export default Game;
