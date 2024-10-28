import { MissionUtils } from '@woowacourse/mission-utils';
import IInputView from './Interfaces/IInputView.js';
import {
  CAR_NAME_DELIMITER,
  ERROR_MESSAGES,
  INPUT_PROMPTS,
  CAR_NAME_MAX_LENGTH,
} from '../constants.js';

class InputView extends IInputView {
  async readInput(string) {
    let inputValue = '';

    try {
      inputValue = await MissionUtils.Console.readLineAsync(string);
    } catch (err) {
      throw new Error(err);
    }

    return inputValue;
  }

  async readRaceCarNames() {
    const raceCarNamesInput = await this.readInput(
      INPUT_PROMPTS.ENTER_CAR_NAMES
    );

    const raceCarNames = raceCarNamesInput
      .split(CAR_NAME_DELIMITER)
      .map(name => name.trim());

    this.validateRaceCarNames(raceCarNames);

    return raceCarNames;
  }

  async readAttemptCount() {
    let attemptCount = 0;

    const input = await this.readInput(INPUT_PROMPTS.ENTER_ATTEMPT_COUNT);
    attemptCount = Number(input);

    return attemptCount;
  }

  validateRaceCarNames(raceCarNames) {
    raceCarNames.forEach(name => {
      if (name.length > CAR_NAME_MAX_LENGTH) {
        throw new Error(ERROR_MESSAGES.NAME_TOO_LONG);
      }
    });

    const uniqueRaceCarNames = new Set(raceCarNames);
    if (uniqueRaceCarNames.size !== raceCarNames.length) {
      throw new Error(ERROR_MESSAGES.NAME_DUPLICATE);
    }
  }
}

export default InputView;
