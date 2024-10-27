import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../view/input-view.js';
import OutputView from '../view/output-view.js';
import GAME_MESSAGE from '../constant/message.js';
import validateCarName from '../validation/validate-carname.js';
import validateAttemptCount from '../validation/validate-attempt-count.js';

class Game {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async process() {
    const carNamesInput = await this.inputView.getCarNames(GAME_MESSAGE.CAR_NAMES_INPUT);

    validateCarName(carNamesInput);
    const carNameList = carNamesInput.split(',');

    const attemptCountInput = await this.inputView.getAttemptCount(GAME_MESSAGE.ATTEMPT_COUNT_INPUT);
    validateAttemptCount(attemptCountInput);
    const attemptCount = parseInt(attemptCountInput, 10);

    // 여기서부터 race 시작
    this.outputView.printExecutionResultMessage();

    const record = {};

    carNameList.forEach((car) => {
      record[car] = 0;
    });

    for (let count = 1; count <= attemptCount; count += 1) {
      for (let order = 0; order < carNameList.length; order += 1) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          record[carNameList[order]] += 1;
        }

        this.outputView.printCarProgress(carNameList[order], record[carNameList[order]]);
      }
      Console.print('\n');
    }

    const moves = Object.values(record);
    const winnerMove = Math.max(...moves);

    const winner = [];

    for (let car = 0; car < moves.length; car += 1) {
      if (moves[car] === winnerMove) {
        winner.push(carNameList[car]);
      }
    }

    this.outputView.printWinners(winner);
  }
}

export default Game;
