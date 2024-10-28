import { Console, Random } from '@woowacourse/mission-utils';
import Car from './car.js';

const OUTPUT_MESSAGE = Object.freeze({
  GAME_START: '실행 결과',
  WINNER: '최종 우승자 :',
});

class Race {
  constructor(carNameList, attemptCount) {
    this.carList = carNameList.map((carName) => new Car(carName));
    this.attemptCount = attemptCount;
  }

  printStartMessage() {
    Console.print('\n');
    Console.print(OUTPUT_MESSAGE.GAME_START);
  }

  race() {
    for (let count = 1; count <= this.attemptCount; count += 1) {
      this.executeTurn();
      Console.print('\n');
    }
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  executeTurn() {
    this.carList.forEach((car) => {
      const randomNumber = this.getRandomNumber();
      if (randomNumber >= 4) {
        car.move();
      }
      car.printProgress();
    });
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
    this.race();
    const winners = this.getWinners();
    this.printWinners(winners);
  }
}

export default Race;
