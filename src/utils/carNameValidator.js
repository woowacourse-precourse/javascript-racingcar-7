import { Message, CAR_VALIDATION, INPUT_VALIDATION_REGEX } from './constants.js';

const isInputEnglishOrNumber = (userInput) => {
  const CHECK_INPUT = INPUT_VALIDATION_REGEX.ALPHANUMERIC;

  if (CHECK_INPUT.test(userInput) === false) {
    throw new Error(Message.ERROR.CAR.INVALID_CAR_NAME);
  }
};

const isInputEmpty = (userInput) => {
  if (userInput === null) {
    throw new Error(Message.ERROR.CAR.INVALID_NUBER_TYPE);
  }

  if (userInput === undefined) {
    throw new Error(Message.ERROR.CAR.INVALID_NUBER_TYPE);
  }

  if (userInput === '') {
    throw new Error(Message.ERROR.CAR.INVALID_ROUND);
  }
};

const isValidUserInput = (userInput) => {
  const nameList = userInput.split(CAR_VALIDATION.CAR_NAME_SEPARATOR);
  const setNameList = [...new Set(nameList)];
  const MIN_CAR_LIST_LENGTH = CAR_VALIDATION.MIN_CAR_LIST_LENGTH;
  const MAX_CAR_NAME_LENGTH = CAR_VALIDATION.MAX_CAR_NAME_LENGTH;

  nameList.forEach((carName) => {
    if (carName === '') {
      throw new Error(Message.ERROR.CAR.INVALID_CAR_NAME);
    }
    if (MAX_CAR_NAME_LENGTH < carName.length) {
      throw new Error(Message.ERROR.CAR.INVALID_CAR_NAME_TO_LONG);
    }
  });

  if (nameList.length < MIN_CAR_LIST_LENGTH) {
    throw new Error(Message.ERROR.CAR.INVALID_MIN_CARS);
  }

  if (nameList.length !== setNameList.length) {
    throw new Error(Message.ERROR.CAR.INVALID_DUPLICATE_CAR_NAME);
  }

  return nameList;
};

export const carNameValidate = (userInput) => {
  isInputEnglishOrNumber(userInput);
  isInputEmpty(userInput);
  return isValidUserInput(userInput);
};
