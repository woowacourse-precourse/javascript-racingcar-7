import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../utils/constants/MESSAGE.js';

class OutputView {
  gameResultHeader() {
    Console.print(MESSAGE.GAME_RESULT_HEADER);
  }

  gameResult(carObj) {
    carObj.forEach((car) => {
      Console.print(`${car.name} : ${car.distance}`);
    });
  }

  winningResult(winner) {
    Console.print(`${MESSAGE.GAME_WINNER_MESSAGE}${winner}`);
  }
}

export default OutputView;
