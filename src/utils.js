import { Console } from '@woowacourse/mission-utils';
import { LOG_MESSAGE, TAG } from './constants.js'; 

const getCarName = () => { return Console.readLineAsync(LOG_MESSAGE.START_MESSAGE); }

const getAttempt = () => { return Console.readLineAsync(LOG_MESSAGE.ATTEMPT_COUNT_MESSAGE); }

const throwError = (message) => {
  const errorMessage = `${TAG.ERROR_TAG} ${message}`;
  throw new Error(errorMessage);
};

export { 
  getCarName,
  getAttempt,
  throwError,
};