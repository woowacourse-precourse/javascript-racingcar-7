import { ERROR_MESSAGES } from '../constants/errorMessages.js';

const carNamesLengthValidator = trimmedEachCarName => {
  return trimmedEachCarName.every(element => element.length < 6);
};

const isCarNamesInputNotEmpty = carNamesInput => {
  if (carNamesInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

//숫자일 경우에 에러나게하기
const isCarNamesInputTypeOfNum = spliteAndtrimmedCarName => {
  for (let i = 0; i < spliteAndtrimmedCarName.length; i += 1) {
    if (!isNaN(parseInt(spliteAndtrimmedCarName[i]))) {
      throw new Error(ERROR_MESSAGES.INVALID_STRING);
    }
  }
};

const isCarNamesInputValidatedLength = spliteAndtrimmedCarName => {
  if (carNamesLengthValidator(spliteAndtrimmedCarName)) {
    return true;
  }

  if (carNamesLengthValidator(spliteAndtrimmedCarName) === false) {
    throw new Error(ERROR_MESSAGES.OVERLENGTH_INPUT);
  }
};

export { isCarNamesInputNotEmpty, isCarNamesInputTypeOfNum, isCarNamesInputValidatedLength };
