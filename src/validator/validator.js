import {
  MAX_CAR_NAME_LEN,
  MIN_CAR_NAME_LEN,
  MIN_TRY_COUNT,
  MAX_TRY_COUNT,
  MAX_CAR_COUNT,
} from '../constants/constants.js';
import { ERROR_MESSAGE } from '../constants/messages.js';
import {
  ALPHABET_COMMA_AND_NUMBER_REGEX,
  NUMBER_REGEX,
} from '../constants/regex.js';

const checkOnlyAlphabetCommaAndNumber = function checkOnlyAlphabetCommaAndNum(
  inputForRacingCars,
) {
  if (
    ![...inputForRacingCars].every((char) =>
      ALPHABET_COMMA_AND_NUMBER_REGEX.test(char),
    )
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_INPUT);
  }
  return inputForRacingCars;
};

const checkValidNameLength = function checkValidNameLengthFunc(carNamesArray) {
  if (
    !carNamesArray.every(
      (name) =>
        name.length >= MIN_CAR_NAME_LEN && name.length <= MAX_CAR_NAME_LEN,
    )
  ) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
  }
  return carNamesArray;
};

const checkDuplicateNames = function checkDuplicateNamesFunc(carNamesArray) {
  const uniqueNames = new Set(carNamesArray);

  if (uniqueNames.size !== carNamesArray.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
  }
  return carNamesArray;
};

const checkOnlyNumber = function checkOnlyNumberFunc(inputForTryCount) {
  if (!NUMBER_REGEX.test(inputForTryCount)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_INPUT);
  }
  return inputForTryCount;
};

const checkValidRange = function checkValidRangeFunc(inputForTryCount) {
  const checkNumber = Number(inputForTryCount);

  if (checkNumber < MIN_TRY_COUNT || checkNumber > MAX_TRY_COUNT) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
  }
  return inputForTryCount;
};

const checkIsNull = function checkIsNullFunc(inputString) {
  if (!inputString) {
    throw new Error(ERROR_MESSAGE.NULL_INPUT);
  }

  return inputString;
};

const checkCarCountLimit = function checkCarCountLimitFunc(carNamesArray) {
  if (carNamesArray.length > MAX_CAR_COUNT) {
    throw new Error(ERROR_MESSAGE.LIMIT_CAR_COUNT);
  }
  return carNamesArray;
};

export {
  checkOnlyAlphabetCommaAndNumber,
  checkValidNameLength,
  checkDuplicateNames,
  checkOnlyNumber,
  checkValidRange,
  checkIsNull,
  checkCarCountLimit,
};
