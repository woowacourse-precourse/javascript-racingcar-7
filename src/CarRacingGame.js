import { Console } from '@woowacourse/mission-utils';
import { getHighestPositionCars } from './utils/getHighestPositionCars.js';

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

  // 매 라운드 마다 차들을 움직이거나 멈추게 하는 함수
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

  getWinners() {
    return getHighestPositionCars(this.#cars);
  }
}

export default CarRacingGame;
