import { Console } from '@woowacourse/mission-utils';
import Cars from './CarsInput/index.js';

class App {
  async run() {
    const cars = await Cars();
    Console.print(cars);
  }
}

export default App;
