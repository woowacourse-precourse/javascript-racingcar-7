import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from './constant.js';
import { getUserInput } from './util.js';

class App {
  async run() {
    const carInput = await getUserInput(CONSOLE_MESSAGE.CAR_INPUT_MESSAGE);

    const tryCountInput = await getUserInput(
      CONSOLE_MESSAGE.TRY_COUNT_INPUT_MESSAGE,
    );

    Console.print(carInput);
    Console.print(tryCountInput);
  }
}

export default App;
