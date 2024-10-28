import Car from './Car.js';

export default class CarRace {
  #cars;

  #raceCount;

  constructor(carNames, raceCount) {
    this.#cars = carNames.split(',').map((carName) => new Car(carName));

    if (!CarRace.isValidRaceCount(raceCount)) {
      throw new Error('[ERROR] 시도 횟수는 0 이상의 정수여야 합니다.');
    }

    this.#raceCount = Number(raceCount);
  }

  static isValidRaceCount(raceCount) {
    return Number.isInteger(Number(raceCount)) && Number(raceCount) > 0;
  }
}
