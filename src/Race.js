import { MissionUtils } from '@woowacourse/mission-utils';

class Race {
  #cars;

  #time;

  constructor(cars, time) {
    this.#cars = cars;
    this.#time = time;
  }

  get cars() {
    return this.#cars;
  }

  get time() {
    return this.#time;
  }

  moveCars() {
    for (let i = 0; i < this.#cars.length; i += 1) {
      this.#cars[i].tryMoveForward();
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
