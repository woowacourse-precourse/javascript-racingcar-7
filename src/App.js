import { input, print } from './handler/IoHandller.js';
import { initGame } from './game/Game.js';
import { parseAndValidate } from './parsers/ParseAndValidate.js';

class App {
  async run() {
    try {
      const carInput = await input('경주할 자동차의 이름을 입력한다 : ');
      const countInput = await input('시도할 횟수를 입력한다 : ');
      const parsedCarInput = parseAndValidate({
        car: carInput,
        count: countInput,
      });
      initGame({ car: parsedCarInput, count: countInput });
    } catch (error) {
      print(error.message);
    }
  }
}

export default App;
