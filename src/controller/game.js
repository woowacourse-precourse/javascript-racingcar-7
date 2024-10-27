import { Console, Random } from '@woowacourse/mission-utils';
import InputView from '../view/input-view.js';
import GAME_MESSAGE from '../constant/message.js';

class Game {
  constructor() {
    this.inputView = new InputView();
  }

  async process() {
    const carNamesInput = await this.inputView.getCarNames(GAME_MESSAGE.CAR_NAMES_INPUT);
    const carNames = carNamesInput.split(',');

    const attemptCountInput = await this.inputView.getAttemptCount(GAME_MESSAGE.ATTEMPT_COUNT_INPUT);
    const attemptCount = parseInt(attemptCountInput, 10);
    if (carNamesInput === '' || attemptCountInput === '') {
      throw new Error(GAME_MESSAGE.ERROR);
    }

    carNames.forEach((carName) => {
      if (carName.length >= 5) {
        throw new Error(GAME_MESSAGE.ERROR);
      }
    });

    // 여기서부터 race 시작
    Console.print(GAME_MESSAGE.EXECUTION_RESULT_OUTPUT);

    const record = {};

    carNames.forEach((car) => {
      record[car] = 0;
    });

    for (let count = 1; count <= attemptCount; count += 1) {
      for (let order = 0; order < carNames.length; order += 1) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          record[carNames[order]] += 1;
        }

        Console.print(`${carNames[order]} : ${'-'.repeat(record[carNames[order]])}`);
      }
      Console.print('\n');
    }

    const moves = Object.values(record);
    const winnerMove = Math.max(...moves);

    const winner = [];

    for (let car = 0; car < moves.length; car += 1) {
      if (moves[car] === winnerMove) {
        winner.push(carNames[car]);
      }
    }

    Console.print(`${GAME_MESSAGE.WINNER_OUTPUT} ${winner.join(', ')}`);
  }
}

export default Game;
