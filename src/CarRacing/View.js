import { Console } from '@woowacourse/mission-utils';

class View {
  async readInput(inputMessage) {
    const rawInput = await Console.readLineAsync(`${inputMessage}\n`);
    return rawInput;
  }

  printResult(result) {
    Console.print(`실행 결과: \n` + result);
  }
}

export default View;
