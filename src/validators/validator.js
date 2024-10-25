import ERROR_MESSAGES from '../constants/errorMessages.js';
import throwError from '../utils/error.js';

export function checkCommaSeparatedNames(input) {
  const pattern = /^[a-zA-Z0-9가-힣,\s]+$/;

  if (!pattern.test(input)) throwError(ERROR_MESSAGES.INVALID_FORMAT);
}

function checkCarNameLength(name) {
  if (name.length > 5) throwError(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
}

function checkAllowedCharacters(name) {
  const pattern = /^[a-zA-Z가-힣\s]+$/;

  if (!pattern.test(name)) throwError(ERROR_MESSAGES.NAME_INVALID_CHARACTERS);
}

function checkEmptyString(name) {
  if (name === '') throwError(ERROR_MESSAGES.NAME_EMPTY);
}

function checkCarNameDuplicates(names) {
  if (new Set(names).size === names.length) return;
  throwError(ERROR_MESSAGES.NAME_DUPLICATE);
}

function checkMinimumCars(names) {
  if (names.length < 2) throwError(ERROR_MESSAGES.MINIMUM_CARS);
}

export function checkCarNames(carNames) {
  checkMinimumCars(carNames);
  checkCarNameDuplicates(carNames);

  carNames.forEach((name) => {
    checkCarNameLength(name);
    checkEmptyString(name);
    checkAllowedCharacters(name);
  });

  return carNames;
}

function checkPositiveInteger(roundCount) {
  if (!Number.isInteger(roundCount) || roundCount < 1)
    throwError(ERROR_MESSAGES.POSITIVE_INTEGER_REQUIRED);
}

function checkRoundLimit(roundCount, maxRounds) {
  if (roundCount > maxRounds)
    throwError(ERROR_MESSAGES.ROUND_LIMIT_EXCEEDED(maxRounds));
}

function checkIsNumber(roundCount) {
  if (Number.isNaN(roundCount)) throwError(ERROR_MESSAGES.INVALID_NUMBER_INPUT);
}

export function validateRoundCount(roundCountInput, maxRounds = 100) {
  const roundCount = Number(roundCountInput);

  checkIsNumber(roundCount);
  checkPositiveInteger(roundCount);
  checkRoundLimit(roundCount, maxRounds);

  return roundCount;
}
