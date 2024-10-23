import { Console } from "@woowacourse/mission-utils";
import InputHandler from './handler/InputHandler.js';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
  }

  async run() {
    const carNames = await this.inputHandler.carNameInput();
    this.printCarNames(carNames);
  }

  printCarNames(carNames) {
    Console.print(`입력된 자동차 이름들: ${carNames.join(',')}`);
  }
}

export default App;
