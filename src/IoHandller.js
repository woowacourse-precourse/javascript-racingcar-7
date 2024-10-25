import { Console } from '@woowacourse/mission-utils';

export class IoHandler {
  input(message) {
    return Console.readLineAsync(message);
  }

  print(message) {
    Console.print(message);
  }
}
