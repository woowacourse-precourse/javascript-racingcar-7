import { input, print } from './IoHandller.js';
import { validateInput } from './Validate.js';
import { parseInputs } from './Parsing.js';
import { initGame } from './Game.js';
import { initRandomName } from './Random.js';

class App {
  async run() {
    try {
      const carInput = await input('경주할 자동차의 이름을 입력한다 : ');
      const countInput = await input('시도할 횟수를 입력한다 : ');
      const parseCarInput = parseInputs(carInput);
      validateInput({ car: parseCarInput, count: countInput });
      const checkEmptyAndRandom = initRandomName(...parseCarInput);
      initGame(checkEmptyAndRandom, countInput);
    } catch (error) {
      print(error.message);
      throw error;
    }
  }
}

export default App;
