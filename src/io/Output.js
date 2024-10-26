import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/GameMessage.js';

class Output {
  static printResultHeader() {
    return Console.print('\n' + GAME_MESSAGE.resultHeader);
  }

  static printResult(name, raceMarker) {
    const result = `${name} ${GAME_MESSAGE.resultDelimeter} ${raceMarker}`;
    return Console.print(result);
  }

  static printNewLine() {
    return Console.print('\n');
  }
}

export default Output;
