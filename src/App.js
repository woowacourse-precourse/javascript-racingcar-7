import { Console, Random } from "@woowacourse/mission-utils";


// 경주할 자동차 이름 입력
class InputHandler {
  async getInput(message) {
    return await Console.readLineAsync(message);
  }

  printMessage(message) {
    Console.print(message);
  }
}

// 각 자동차 별 무작위 값 할당
class RandomNumberGenerator {
  static pickNumberInRange(min = 0, max = 9) {
    return Random.pickNumberInRange(min, max);
  }
}

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.cars = [];
  }

  async run() {

  }


}

export default App;