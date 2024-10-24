import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../../Errors/errorMessages.js';
import App from '../../App.js';

const isCarNamesInputNotEmpty = carNamesInput => {
  if (carNamesInput === '') {
    throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
  }
};

const carNamesLengthValidator = trimmedEachCarName => {
  return trimmedEachCarName.every(element => element.length < 6);
};

export { isCarNamesInputNotEmpty, carNamesLengthValidator };
