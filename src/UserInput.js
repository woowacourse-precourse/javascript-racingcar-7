import { Console } from '@woowacourse/mission-utils';
import { FAIL_INPUT } from './constants/errorConstants.js';
import * as InputConstants from './constants/userInputConstants.js';
import throwError from './utils/throwError.js';

async function getUserInput(caption) {
  try {
    const input = await Console.readLineAsync(caption);
    return input;
  } catch (e) {
    throwError(FAIL_INPUT);
  }
}

export default class UserInput {
  static async getCarNames() {
    const carNames = await getUserInput(InputConstants.CAR_NAME);
    return carNames.split(',');
  }

  static async getTryCount() {
    const tryCount = await getUserInput(InputConstants.TRY_COUNT);
    return tryCount;
  }
}
