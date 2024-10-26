import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGES } from './constants/messages.js';

const view = {
  async readCars() {
    const answer = await Console.readLineAsync(GAME_MESSAGES.readCarsName);
    return answer;
  },

  async readTrialCount() {
    const answer = await Console.readLineAsync(GAME_MESSAGES.readTrialCount);
    return answer;
  },
};

export default view;
