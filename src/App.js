import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from './constants.js';

class App {
  async run() {
    await this.enterInput();
  }

  async enterInput() {
    const namesString = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_NAME);
    const namesArray = namesString.split(',');

    this.carsForward = namesArray.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    }, {});

    this.count = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_COUNT);

  }
}

export default App;
