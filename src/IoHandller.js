import { Console } from '@woowacourse/mission-utils';

const input = (message) => Console.readLineAsync(message);

const print = (message) => {
  Console.print(message);
};
export default { input, print };
