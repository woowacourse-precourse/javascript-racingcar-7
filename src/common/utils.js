import { Console, Random } from '@woowacourse/mission-utils';
import { LOG_MESSAGE, TAG, GAME_RULES } from './constants.js'; 

const getCarName = () => { return Console.readLineAsync(LOG_MESSAGE.START_MESSAGE); }

const getAttempt = () => { return Console.readLineAsync(LOG_MESSAGE.ATTEMPT_COUNT_MESSAGE); }

const getRandomNumber = (min, max) => { return Random.pickNumberInRange(min, max); };

const throwError = (message) => {
  const errorMessage = `${TAG.ERROR_TAG} ${message}`;
  throw new Error(errorMessage);
};

const printMessage = (message) => Console.print(message);

const splitByDelimiter = (input) => input.split(GAME_RULES.DELIMITER).map(name => name.trim()); 

export { 
  getCarName,
  getAttempt,
  throwError,
  getRandomNumber,
  printMessage,
  splitByDelimiter,
};