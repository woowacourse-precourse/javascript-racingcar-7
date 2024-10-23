import { Console } from '@woowacourse/mission-utils';

class CarRacingGame {
  #cars;
  #count;

  constructor(cars, count) {
    this.#cars = cars;
    this.#count = count;
  }

  playGame() {
    Console.print(`실행 결과`);
    for (let i = 0; i < this.#count; i++) {
      this.tryRound();
      this.printResultPerRound();
    }
  }

  tryRound() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  printResultPerRound() {
    this.#cars.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
  }
}

export default CarRacingGame;
