import { Console } from '@woowacourse/mission-utils';

function input(message) {
  return Console.readLineAsync(message);
}

function output(message) {
  Console.print(message);
}

export { input, output };
