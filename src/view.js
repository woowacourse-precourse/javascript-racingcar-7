import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from './constants/messages.js';
import { STRINGS } from './constants/values.js';

const view = {
  async readCars() {
    const answer = await Console.readLineAsync(GAME_MESSAGES.readCarsName);
    return answer;
  },

  async readTrialCount() {
    const answer = await Console.readLineAsync(GAME_MESSAGES.readTrialCount);
    return answer;
  },

  printExecutionResultMessage() {
    Console.print(GAME_MESSAGES.executionResult);
  },

  printProgress(name, progress) {
    Console.print(name + STRINGS.resultDelimiter + STRINGS.progressBar.repeat(progress));
  },
  printLineBreak() {
    Console.print('');
  },
};

export default view;
