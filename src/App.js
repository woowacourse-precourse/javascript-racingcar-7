import { Console } from '@woowacourse/mission-utils';
import Cars from './features/CarsInput/index.js';
import Count from './features/CountInput/index.js';
import Race from './features/Race/index.js';
import { PROMPT_MSG } from './constants/promptMessage.js';

class App {
  async run() {
    const cars = await Cars();
    const count = await Count();

    Console.print(`\n${PROMPT_MSG.RESULT}`);

    Race(cars, count);
  }
}

export default App;
