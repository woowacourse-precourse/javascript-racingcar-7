import { MissionUtils } from '@woowacourse/mission-utils';
import messages from './printMessages.js';
import { inputValidator } from './validateInput.js';

export const inputHandler = {
  async getCarNamesInput() {
    const userInputCarNames = await MissionUtils.Console.readLineAsync(
      messages.askCarName + messages.newLine
    );
    if (inputValidator.checkCarsNameValidate(userInputCarNames)) {
      return userInputCarNames.split(',').map((name) => name.trim());
    }
  },

  async getTryNumberInput() {
    const tryNumber = await MissionUtils.Console.readLineAsync(
      messages.askTryNumber + messages.newLine
    );
    return Number(tryNumber);
  },
};
