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

  printProgress(name, progress) {
    Console.print(name + STRINGS.outputNameDelimiter + STRINGS.progressBar.repeat(progress));
  },
  printLineBreak() {
    Console.print('\n');
  },
};

export default view;
