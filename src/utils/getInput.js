import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constant/Constant.js';

export const getCarNames = async () => {
  const inputNames = await Console.readLineAsync(CONSTANTS.INPUT_NAME);
  if (!inputNames.trim()) { 
    throw new Error(CONSTANTS.ERROR_MSG0);
  }
  const carNames = inputNames.split(',').map((name) => name.trim());

  carNames.forEach((name) => {
    if (name.length > CONSTANTS.MAX_CAR_NAME_LENGTH) {
      throw new Error(CONSTANTS.ERROR_MSG1);
    }
  });

  return carNames;
};

export const getMoveAttempts = async () => {
  const inputAttempts = await Console.readLineAsync(CONSTANTS.INPUT_ATTEMPTS);
  const moveAttempts = parseInt(inputAttempts, 10);

  if (Number.isNaN(moveAttempts) || moveAttempts <= 0) {
    throw new Error(CONSTANTS.ERROR_MSG2);
  }

  return moveAttempts;
};
