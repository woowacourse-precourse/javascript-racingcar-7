import { Console } from '@woowacourse/mission-utils';

const getUserInput = (message) => {
  return Console.readLineAsync(message);
};

const printMessage = (message) => {
  Console.print(message);
};

export default { getUserInput, printMessage };
