import { Console, Random } from "@woowacourse/mission-utils";

export const readInput = (content) => {
  return Console.readLineAsync(content);
};

export const printOutput = (content) => {
  return Console.print(content);
};

export const pickNumberInRange = (min, max) => {
  return Random.pickNumberInRange(min, max);
};
