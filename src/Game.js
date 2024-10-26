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
    while (this.currentRepeat !== this.repetitionNumber) {
      this.startRound();
      this.currentRepeat += 1;
    }
  }

  startRound() {
    this.#CARS_LIST.forEach((car) => {
      if (!this.canMoveForward()) return;
      car.moveForward();
    });
  }

  canMoveForward() {
    if (Random.pickNumberInRange(0, 9) >= 4) return true;
    return false;
  }
}

export default Game;
