import { Console } from '@woowacourse/mission-utils';

export class IOManager {
  static async InputManager(message, validateFunc = () => {}) {
    const userInput = await Console.readLineAsync(message);

    validateFunc(userInput);

    return userInput;
  }
}
