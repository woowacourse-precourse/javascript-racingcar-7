import { Console, Random } from '@woowacourse/mission-utils';

export const readUserInput = (content) => {
  return Console.readLineAsync(content);
};

export const printResult = (content) => {
  return Console.print(content);
};

export const pickNumberInRange = (min, max) => {
  return Random.pickNumberInRange(min, max);
};
