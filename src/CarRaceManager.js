import { Console } from '@woowacourse/mission-utils';

import Car from './Car.js';
import { OUTPUT_MESSAGE } from './constants/output.js';

const LAP_DISTANCE_SYMBOL = '-';

class CarRaceManager {
  #cars;
  #tryCount;
  #winners;

  constructor(cars, tryCount) {
    this.#cars = cars.map((car) => new Car(car));
    this.#tryCount = Number(tryCount);
    this.#winners = [];
  }

  race() {
    Console.print(OUTPUT_MESSAGE.raceResult);

    for (let lap = 0; lap < this.#tryCount; lap++) {
      this.#raceLap();
      this.#displayDistance();
    }

    this.#determineWinner();
    this.#printWinner();
  }

  #raceLap() {
    this.#cars.forEach((car) => car.raceLap());
  }

  #displayDistance() {
    this.#cars.forEach((car) => {
      const name = car.getName();
      const distance = LAP_DISTANCE_SYMBOL.repeat(car.getDistance());

      Console.print(OUTPUT_MESSAGE.lapDistance(name, distance));
    });
    this.#printNewLine();
  }

  #printNewLine() {
    Console.print('');
  }

  #determineWinner() {
    const maxDistance = Math.max(...this.#cars.map((car) => car.getDistance()));

    this.#winners = this.#cars.filter(
      (car) => car.getDistance() === maxDistance
    );
  }

  #printWinner() {
    const winnerNames = this.#winners.map((winner) => winner.getName());
    Console.print(OUTPUT_MESSAGE.winners(winnerNames));
  }
}

export default CarRaceManager;
