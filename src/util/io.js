import { Console } from '@woowacourse/mission-utils';

function readUserInput(message) {
  return Console.readLineAsync(message);
}

function printOutput(message) {
  Console.print(message);
}

export { readUserInput, printOutput };
