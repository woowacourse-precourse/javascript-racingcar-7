import { initGame } from './Game.js';
import { input, print } from './IoHandller.js';
import { validateInput } from './Validate.js';
import { parseInputs } from './Parsing.js';

class App {
  async run() {
    try {
      const carInput = await input('경주할 자동차의 이름을 입력한다 : ');
      const countInput = await input('시도할 횟수를 입력한다 : ');
      const parseCarInput = parseInputs(carInput);
      validateInput(parseCarInput, countInput);
      initGame(parseCarInput, countInput);
    } catch (error) {
      print(error.message);
      throw error; // 예외를 다시 던져 Promise가 reject되도록 처리
    }
  }
}

export default App;
