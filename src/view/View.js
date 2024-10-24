import { Console } from '@woowacourse/mission-utils';

class View {
  printMessage(message) {
    Console.print(message);
  }

  async readUserInput(input) {
    this.printMessage(input);
    return await Console.readLineAsync('');
  }
}

export default View;
