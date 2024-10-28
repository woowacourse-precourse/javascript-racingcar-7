import ERROR_MESSAGE from './constants.js';

const DELIMITER_VALIDATOR = input => {
  if (input.length > 5 && !/,/.test(input)) {
    throw new Error(ERROR_MESSAGE.DELIMITER_VALIDATION);
  }
};

const CAR_NAME_VALIDATOR = input => {
  if (input === '') {
    throw new Error(ERROR_MESSAGE.INPUT_VALIDATION);
  }

  input.map(name => {
    if (name === '') {
      throw new Error(ERROR_MESSAGE.CAR_NAME_VALIDATION);
    }

    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH_VALIDATION);
    }
  });

  const SET_INPUT = [...new Set(input)];
  if (input.length !== SET_INPUT.length) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATION);
  }
};

const ATTEMPT_TIMES_VALIDATOR = input => {
  const INPUT_NUMBER = Number(input);
  if (input === '') {
    throw new Error(ERROR_MESSAGE.INPUT_VALIDATION);
  }

  if (Number.isNaN(INPUT_NUMBER)) {
    throw new Error(ERROR_MESSAGE.ATTEMPT_TIMES_TYPE_VALIDATION);
  }

  if (INPUT_NUMBER < 1) {
    throw new Error(ERROR_MESSAGE.ATTEMPT_TIMES_VALIDATION);
  }
};
export { DELIMITER_VALIDATOR, CAR_NAME_VALIDATOR, ATTEMPT_TIMES_VALIDATOR };
