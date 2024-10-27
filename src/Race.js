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

  static printWinner(winners) {
    let winnerStr = '최종 우승자 : ';
    for (let i = 0; i < winners.length; i += 1) {
      winnerStr += `${winners[i].name}`;
      if (i !== winners.length - 1) {
        winnerStr += ', ';
      }
    }
    MissionUtils.Console.print(winnerStr);
  }

  moveCars() {
    const cars = this.#cars;
    for (let i = 0; i < cars.length; i += 1) {
      cars[i].tryMoveForward();
    }
  }

  printRaceLog() {
    const cars = this.#cars;
    for (let i = 0; i < cars.length; i += 1) {
      let carMovedStr = `${cars[i].name} : `;
      const moved = cars[i].moveCnt;
      for (let j = 0; j < moved; j += 1) {
        carMovedStr += '-';
      }
      MissionUtils.Console.print(`${carMovedStr}`);
    }
    MissionUtils.Console.print('');
  }

  findMaxMoveCnt() {
    const cars = this.#cars;
    for (let i = 0; i < cars.length; i += 1) {
      const cnt = cars[i].moveCnt;
      if (cnt > this.#maxMoves) {
        this.#maxMoves = cnt;
      }
    }
  }

  selectWinner() {
    this.findMaxMoveCnt();
    const cars = this.#cars;
    for (let i = 0; i < cars.length; i += 1) {
      if (cars[i].moveCnt === this.#maxMoves) {
        this.#winners.push(cars[i]);
      }
    }
    return this.#winners;
  }
}

export default Race;
