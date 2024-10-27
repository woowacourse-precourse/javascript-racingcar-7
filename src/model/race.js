import { Console, Random } from '@woowacourse/mission-utils';
import Car from './car.js';

const OUTPUT_MESSAGE = Object.freeze({
  EXECUTION_RESULT_OUTPUT: '\n실행 결과',
  WINNER_OUTPUT: '최종 우승자 :',
});

class Race {
  constructor(carNameList, attemptCount) {
    this.carList = carNameList.map((carName) => new Car(carName));
    this.attemptCount = attemptCount;
  }

  printStartMessage() {
    Console.print(OUTPUT_MESSAGE.EXECUTION_RESULT_OUTPUT);
  }

  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNER_OUTPUT} ${winners.join(', ')}`);
  }

  run() {
    this.printStartMessage();

    for (let count = 1; count <= this.attemptCount; count += 1) {
      this.carList = this.carList.map((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
        car.printProgress();
        return car;
      });
      Console.print('\n');
    }

    // const moves = Object.values(record);
    // const winnerMove = Math.max(...moves);

    // const winner = [];

    // for (let car = 0; car < moves.length; car += 1) {
    //   if (moves[car] === winnerMove) {
    //     winner.push(this.carList[car]);
    //   }
    // }

    // this.printWinners(winner);
  }
}

export default Race;
