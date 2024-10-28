import { MissionUtils } from '@woowacourse/mission-utils';
import messages from './printMessages.js';

export const inputHandler = {
  async getCarNamesInput() {
    const userInputCarNames = await MissionUtils.Console.readLineAsync(
      messages.askCarName + messages.newLine
    );

    return userInputCarNames.split(',');
  },
};
