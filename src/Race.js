import { MissionUtils } from '@woowacourse/mission-utils';

class Race {
  #cars;

  #time;

  #winners;

  #maxMoves;

  constructor(cars, time) {
    this.#cars = cars;
    this.#time = time;
    this.#maxMoves = 0;
    this.#winners = [];
  }

  get cars() {
    return this.#cars;
  }

  get time() {
    return this.#time;
  }

  moveCars() {
    let movedFlag = false;
    for (let i = 0; i < this.#cars.length; i += 1) {
      if (this.#cars[i].tryMoveForward()) {
        movedFlag = true;
      }
    }
    if (movedFlag) {
      this.#maxMoves += 1;
    }
    this.#time -= 1;
  }

  printRaceLog() {
    const cars = this.#cars;
    for (let i = 0; i < cars.length; i += 1) {
      let carMovedStr = `${cars[i].name} : `;
      const moved = cars[i].moveCnt;
      for (let j = 0; j < moved; j += 1) {
        carMovedStr += '-';
      }
      MissionUtils.Console.print(carMovedStr);
    }
  }
}

export default Race;
