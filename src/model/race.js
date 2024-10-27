import { Console, Random } from '@woowacourse/mission-utils';
import OutputView from '../view/output-view.js';

class Race {
  constructor(carList, attemptCount) {
    this.outputView = new OutputView();
    this.carList = carList;
    this.attemptCount = attemptCount;
    this.record = {};
  }

  run() {
    // 여기서부터 race 시작
    this.outputView.printStartRaceMessage();

    const record = {};

    this.carList.forEach((car) => {
      record[car] = 0;
    });

    for (let count = 1; count <= this.attemptCount; count += 1) {
      for (let order = 0; order < this.carList.length; order += 1) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          record[this.carList[order]] += 1;
        }

        this.outputView.printCarProgress(this.carList[order], record[this.carList[order]]);
      }
      Console.print('\n');
    }

    const moves = Object.values(record);
    const winnerMove = Math.max(...moves);

    const winner = [];

    for (let car = 0; car < moves.length; car += 1) {
      if (moves[car] === winnerMove) {
        winner.push(this.carList[car]);
      }
    }

    this.outputView.printWinners(winner);
  }
}

export default Race;
