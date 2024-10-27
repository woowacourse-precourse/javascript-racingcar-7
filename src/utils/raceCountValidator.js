import { Message, ROUND_VALIDATION, INPUT_VALIDATION_REGEX } from './constants.js';

const isNum = (userInput) => {
  const NUMERIC_REGIX = INPUT_VALIDATION_REGEX.NUMERIC;

  if (NUMERIC_REGIX.test(userInput) === true) {
    return true;
  }
  return false;
};

const isNumberInRange = (userInput) => {
  const MIN = ROUND_VALIDATION.MIN_ROUND;
  const MAX = ROUND_VALIDATION.MAX_ROUND;
  const numberOfRace = Number(userInput);

  if (MIN <= numberOfRace && numberOfRace <= MAX) {
    return true;
  }
  return false;
};

export const raceCountValidate = (userInput) => {
  if (isNum(userInput) === false) {
    throw new Error(Message.ERROR.ROUND.INVALID_TYPE);
  }

  if (isNumberInRange(userInput) === false) {
    throw new Error(Message.ERROR.ROUND.INVALID_RANGE);
  }

  return Number(userInput);
};
