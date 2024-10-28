import { MissionUtils } from '@woowacourse/mission-utils';
import messages from './printMessages.js';
import { inputValidator } from './inputValidator.js';

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
    const userInputTryNumber = await MissionUtils.Console.readLineAsync(
      messages.askTryNumber + messages.newLine
    );
    if (inputValidator.checkTryNumberValidate(userInputTryNumber)) {
      return Number(userInputTryNumber);
    }
  },
};
