import { MissionUtils } from '@woowacourse/mission-utils';
import messages from './printMessages.js';

export const inputHandler = {
  async getCarNamesInput() {
    const userInputCarNames = await MissionUtils.Console.readLineAsync(
      messages.askCarName + messages.newLine
    );
    return userInputCarNames.split(',');
  },

  async getTryNumberInput() {
    const tryNumber = await MissionUtils.Console.readLineAsync(
      messages.askTryNumber + messages.newLine
    );
    return Number(tryNumber);
  },
};
