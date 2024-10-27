import { Console } from '@woowacourse/mission-utils';

export async function readInput(message = '', validation = []) {
  const input = await Console.readLineAsync(message);

  validation.forEach((func) => func(input));

  return input;
}

export function print(message = '') {
  return Console.print(message);
}
