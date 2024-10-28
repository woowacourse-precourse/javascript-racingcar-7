import { CONFIG } from '../constant/config.js';
import { ERROR_MESSAGE } from '../constant/message.js';

function validateCarNames(carNames) {
  carNames.forEach((name) => {
    if (
      name.length < CONFIG.MIN_CAR_NAME_LENGTH ||
      name.length > CONFIG.MAX_CAR_NAME_LENGTH
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME);
    }
  });
}

function validateMinimumCarCount(carNames) {
  if (carNames.length < CONFIG.MIN_CAR_LIST_LENGTH) {
    throw new Error(ERROR_MESSAGE.MIN_CARS_REQUIRED);
  }
}

function validateDuplicateCarNames(carNames) {
  const nameSet = new Set();

  carNames.forEach((name) => {
    if (nameSet.has(name)) {
      throw new Error(ERROR_MESSAGE.CAR_ALREADY_EXISTS);
    }
    nameSet.add(name);
  });
}

export function validateCarNamesInput(carNames) {
  validateCarNames(carNames);
  validateMinimumCarCount(carNames);
  validateDuplicateCarNames(carNames);
}

export function validateTurnCount(turnCount) {
  if (turnCount < CONFIG.MIN_TURN_COUNT || turnCount > CONFIG.MAX_TURN_COUNT) {
    throw new Error(ERROR_MESSAGE.INVALID_TURN_COUNT);
  }
}
