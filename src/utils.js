import { Console } from '@woowacourse/mission-utils';
import { LOG_MESSAGE, TAG } from './constants.js'; 

const getInput = () => { return Console.readLineAsync(LOG_MESSAGE.START_MESSAGE); }

const throwError = (message) => {
  const errorMessage = `${TAG.ERROR_TAG} ${message}`;
  throw new Error(errorMessage);
};

export { 
  getInput,
  throwError,
};