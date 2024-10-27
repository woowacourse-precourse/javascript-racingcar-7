import ERROR_MESSAGE from './Constants.js';

const CAR_NAME_VALIDATOR = input => {
  if (input === '') {
    throw new Error(ERROR_MESSAGE.INPUT_VALIDATION);
  }

  input.map(name => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_VALIDATION);
    }
  });

  const SET_INPUT = [...new Set(input)];
  if (input.length !== SET_INPUT.length) {
    throw new Error(ERROR_MESSAGE.CAR_NAME_DUPLICATION);
  }
};

export { CAR_NAME_VALIDATOR };
