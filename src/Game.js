import { Console, Random } from '@woowacourse/mission-utils';

class Game {
  #CARS_LIST = [];

  constructor(names, repetitionNumber) {
    this.nameList = this.parseNames(names);
    this.#CARS_LIST = this.allocateCars(this.nameList);
    this.repetitionNumber = repetitionNumber;
    this.currentRepeat = 0;
  }

  parseNames(names) {
    return names.split(',');
  }

  allocateCars(nameList) {
    return nameList.map((name) => new Car(name));
  }

  play() {
    Console.print('\n실행 결과');
    while (this.currentRepeat !== this.repetitionNumber) {
      this.startRound();
      this.printRoundResult();
      this.currentRepeat += 1;
    }
  }

  startRound() {
    this.#CARS_LIST.forEach((car) => {
      if (!this.canMoveForward()) return;
      car.moveForward();
    });
  }

  printRoundResults() {
    this.#CARS_LIST.forEach((car) => {
      const distanceString = '-'.repeat(car.currentDistance);
      Console.print(`${car.name} : ${distanceString}`);
    });

    Console.print(''); // Round 별 구분을 위한 공백
  }

  canMoveForward() {
    if (Random.pickNumberInRange(0, 9) >= 4) return true;
    return false;
  }
}

export default Game;
