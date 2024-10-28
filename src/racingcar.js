import { Console, Random } from '@woowacourse/mission-utils';

class Racingcar {
  constructor() {
    this.cars = [];
    this.counts = 0;
    this.winners = [];
  }

  setCarsAndCounts(carNames, counts) {
    this.verifyCarNames(carNames);
    this.verifyCounts(counts);
    this.cars = this.setCars(carNames);
    this.counts = parseInt(counts, 10);
  }

  verifyCarNames(carNames) {
    if (!carNames.length) throw new Error('[ERROR] 자동차 이름이 없습니다.');
    this.checkCarNameSeparation(carNames);
    this.checkCarNameLength(carNames);
  }

  checkCarNameSeparation(carNames) {
    const invalidSeparators = /[^a-zA-Z0-9, ]/;
    if (invalidSeparators.test(carNames)) {
      throw new Error('[ERROR] 이름 구분은 쉼표로만 가능합니다.');
    }
  }

  checkCarNameLength(carNames) {
    const carArray = carNames.split(',').map((name) => name.trim());
    if (carArray.some((name) => !name || name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.');
    }
  }

  verifyCounts(counts) {
    const parsedCounts = parseInt(counts, 10);
    if (isNaN(parsedCounts) || parsedCounts <= 0) {
      throw new Error('[ERROR] 시도 횟수는 양의 정수만 가능합니다.');
    }
  }

  setCars(carNames) {
    return carNames.split(',').map((name) => ({
      name: name.trim(),
      position: 0,
    }));
  }

  startRace() {
    for (let i = 0; i < this.counts; i++) {
      this.moveCars();
      this.printRaceStatus();
    }
    this.printWinners();
  }

  moveCars() {
    this.cars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.position += 1;
      }
    });
  }

  printRaceStatus() {
    this.cars.forEach((car) => this.printCarStatus(car));
    Console.print('');
  }

  printCarStatus(car) {
    Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
  }

  findWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  printWinners() {
    this.winners = this.findWinners();
    Console.print(`최종 우승자 : ${this.winners.join(', ')}`);
  }
}

export default Racingcar;
