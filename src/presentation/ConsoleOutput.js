import { MissionUtils } from '@woowacourse/mission-utils';
import OutputPort from '../ports/OutputPort.js';
import PROMPT from '../constants/Prompt.js';
import Format from './format/Format.js';

const { Console } = MissionUtils;

export default class ConsoleOutput extends OutputPort {
  static displayRaceHeader () {
    Console.print(PROMPT.RACE_HEADER);
  }
  static displayCarState (name, moveCount) {
    const position = PROMPT.POSITION_MARKER.repeat(moveCount);
    Console.print(Format.raceResult(name, position));
  }

  static displayCarsState (roundResult) {
    roundResult.forEach(({ name, moveCount }) => {
      ConsoleOutput.displayCarState(name, moveCount);
    });
    Console.print('');
  }

  static displayWinners (winners) {
    const winnersText = winners.join(PROMPT.WINNER_DELIMITER);
    Console.print(Format.winners(winnersText));
  }
}
