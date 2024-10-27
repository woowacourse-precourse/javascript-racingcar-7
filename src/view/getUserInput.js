import { Console } from '@woowacourse/mission-utils';
import { Message } from '../utils/constants.js';

export const getCars = async () => {
  return await Console.readLineAsync(Message.INPUT.CAR_NAME);
};

export const getNumberOfRaces = async () => {
  return await Console.readLineAsync(Message.INPUT.RACE_ROUND);
};
