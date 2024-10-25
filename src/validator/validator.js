import {
  MAX_CAR_NAME_LEN,
  MIN_CAR_NAME_LEN,
  MIN_TRY_COUNT,
  MAX_TRY_COUNT,
} from '../constants/constants.js';
import { ERROR_MESSAGE } from '../constants/messages.js';

const checkOnlyAlphabetAndComma = function checkOnlyAlphabetAndCommaFunc(
  inputForRacingCars,
) {
  const AlphabetAndCommaRegex = /^[a-zA-Z,]$/;
  if (
    ![...inputForRacingCars].every((char) => AlphabetAndCommaRegex.test(char))
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
  const numberRegex = /^[0-9]+$/;

  if (!numberRegex.test(inputForTryCount)) {
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

export {
  checkOnlyAlphabetAndComma,
  checkValidNameLength,
  checkDuplicateNames,
  checkOnlyNumber,
  checkValidRange,
  checkIsNull,
};
