import { input, print } from './handler/IoHandler.js';
import { initGame } from './game/game.js';
import { parseInputs } from './parsers/Parsing.js';
import { validateInput } from './parsers/Validate.js';

class App {
  async run() {
    try {
      const carInput = await input('경주할 자동차의 이름을 입력한다 : ');
      const countInput = await input('시도할 횟수를 입력한다 : ');
      const parsedCarInput = parseInputs(carInput);
      validateInput({ car: parsedCarInput, count: countInput });
      initGame({ car: parsedCarInput, count: countInput });
    } catch (error) {
      print(error.message);
      throw error;
    }
  }
}

export default App;
