import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constant/MESSAGE.js';

class OutputView {
  spacing() {
    Console.print('');
  }

  gameResultHeader() {
    Console.print(MESSAGE.GAME_RESULT_HEADER);
  }
}

export default OutputView;
