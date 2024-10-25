import { ERROR_MESSAGES, throwError } from '../Model/Error.js';
import { checkDuplicate } from '../Util/util.js';
import { consecutiveDelimiterPattern } from '../Util/regex.js';
import Car from '../Model/Car.js';

function validateCarNames(carNames) {
  if (consecutiveDelimiterPattern.test(carNames)) {
    throwError(ERROR_MESSAGES.CONSECUTIVE_DELIMITERS);
  }

  const carNamesSplit = carNames.split(',').map((name) => name.trim());

  if (carNamesSplit.some((name) => name === '')) {
    throwError(ERROR_MESSAGES.EMPTY_NAME);
  }

  if (carNamesSplit.some((name) => name.length > 5)) {
    throwError(ERROR_MESSAGES.NAME_TOO_LONG);
  }

  if (checkDuplicate(carNamesSplit)) {
    throwError(ERROR_MESSAGES.DUPLICATED_NAMES);
  }

  return carNamesSplit;
}

// TODO: REFACTOR THIS
function validateRounds(input) {
  const rounds = Number(input);
  if (Number.isNaN(rounds)) {
    throwError(ERROR_MESSAGES.ONLY_NUMBER_ALLOWED);
  }

  // 정수가 아닌 경우
  if (!Number.isInteger(rounds)) {
    throwError(ERROR_MESSAGES.ONLY_INTEGER_ALLOWED);
  }

  // 음수인 경우
  if (rounds <= 0) {
    throwError(ERROR_MESSAGES.ONLY_POSITIVE_ALLOWED);
  }

  const parsedRounds = parseInt(rounds, 10);
  return parsedRounds;
}

function isCarLegit(car) {
  if (car === null || car === undefined || !(car instanceof Car)) {
    throwError(ERROR_MESSAGES.ILLEGAL_CAR);
  }
}

//Type sanity check
function validateCars(cars) {
  cars.forEach((car) => {
    isCarLegit(car);
  });

  return cars;
}

export { validateCarNames, validateRounds, validateCars };
