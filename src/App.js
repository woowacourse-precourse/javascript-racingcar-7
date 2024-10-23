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
      const carNames = await this.inputHandler.carNameInput();
      this.printCarNames(carNames);
    } catch (error) {
      this.outputHandler.printError(error);
    }
  }

  printCarNames(carNames) {
    Console.print(`입력된 자동차 이름들: ${carNames.join(', ')}`);
  }
}

export default App;