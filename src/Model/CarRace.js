import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

export default class CarRace {
  #cars;

  #raceCount;

  static isValidRaceCount(raceCount) {
    return Number.isInteger(Number(raceCount)) && Number(raceCount) > 0;
  }

  constructor(carNames, raceCount) {
    this.#cars = carNames.split(',').map((carName) => new Car(carName));

    if (!CarRace.isValidRaceCount(raceCount)) {
      throw new Error('[ERROR] 시도 횟수는 0 이상의 정수여야 합니다.');
    }

    this.#raceCount = Number(raceCount);
  }

  getMoveDecisions() {
    return Array.from(
      { length: this.#cars.length },
      () => Random.pickNumberInRange(0, 9) >= 4,
    );
  }

  race() {
    const moveDecisions = this.getMoveDecisions();
    moveDecisions.forEach((decision, index) => {
      if (decision) {
        this.#cars[index].move();
      }
    });
  }
}
