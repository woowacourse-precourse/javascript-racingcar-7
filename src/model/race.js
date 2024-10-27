import { Console } from '@woowacourse/mission-utils';
import Car from './car.js';

const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: '\n실행 결과',
  WINNER: '최종 우승자 :',
});

class Race {
  constructor(carNameList, attemptCount) {
    this.carList = carNameList.map((carName) => new Car(carName));
    this.attemptCount = attemptCount;
  }

  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.GAME_START);
  }

  executeTurn() {
    this.carList.forEach((car) => {
      car.move();
      car.printProgress();
    });
  }

  startRace() {
    for (let count = 1; count <= this.attemptCount; count += 1) {
      this.executeTurn();
      Console.print('\n');
    }
  }

  getWinners() {
    const maxProgress = Math.max(...this.carList.map((car) => car.progress));
    return this.carList.filter((car) => car.progress === maxProgress).map((winner) => winner.name);
  }

  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNER} ${winners.join(', ')}`);
  }

  play() {
    this.printStartMessage();
    this.startRace();
    const winners = this.getWinners();
    this.printWinners(winners);
  }
}

export default Race;
