import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { carInput, countInput } from './utils/input.js';

class App {
  async run() {
    try {
      const cars = await carInput();
      const count = await countInput();

      Console.print(cars, count);
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default App;
