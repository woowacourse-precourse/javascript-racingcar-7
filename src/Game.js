import { Console } from '@woowacourse/mission-utils';

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
      this.currentRepeat += 1;
    }
  }
}

export default Game;
