import { getRandomNumber } from './getRandomNumber.js';

export const isStart = async () => {
  const number = await getRandomNumber();

  return number >= 4;
};
