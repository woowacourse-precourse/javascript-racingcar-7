import { MissionUtils } from '@woowacourse/mission-utils';

import { CAR_NAME_PROMPT, ATTEMPT_COUNT_PROMPT, ERROR_MESSAGE } from '../constants.js';

const MAX_CAR_NAME_LENGTH = 5;
const MIN_ATTEMPT_COUNT = 1;

export async function getCarName() {
  try {
    return await MissionUtils.Console.readLineAsync(CAR_NAME_PROMPT);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
}

export function splitCarName(names) {
  return names.split(',')
    .filter((name) => name.trim() !== '')
    .map((name) => name.trim());
}

export async function getAttemptCount() {
  try {
    return await MissionUtils.Console.readLineAsync(ATTEMPT_COUNT_PROMPT);
  } catch (error) {
    throw new Error(ERROR_MESSAGE);
  }
}

export function validateCarNameLength(names) {
  names.forEach((name) => {
    if (name.length > MAX_CAR_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE);
    }
  });
}

export function validateCarsLength(names) {
  if (names.length === 0) {
    throw new Error(ERROR_MESSAGE);
  }
}

export function validateCarNames(names) {
  validateCarNameLength(names);
  validateCarsLength(names);
}

export function validateAttemptCount(attemptCount) {
  if (isNaN(attemptCount) || attemptCount < MIN_ATTEMPT_COUNT) {
    throw new Error(ERROR_MESSAGE);
  }
}
