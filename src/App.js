import { Console } from "@woowacourse/mission-utils";
import InputHandler from './handler/InputHandler.js';
import OutputHandler from './handler/OutputHandler.js';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
  }

  async run() {
    try {
      const carNames = await this.inputHandler.carNamesInput();
      const countNum = await this.inputHandler.countNumInput();
      this.printCarNames(carNames);
      this.printCountNum(countNum);
    } catch (error) {
      this.outputHandler.printError(error);
    }
  }

  printCarNames(carNames) {
    Console.print(`입력된 자동차 이름들: ${carNames.join(', ')}`);
  }

  printCountNum(countNum) {
    Console.print(`입력된 시도 횟수 : ${countNum}`)
  }
}

export default App;