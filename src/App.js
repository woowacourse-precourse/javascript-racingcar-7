import { Console } from '@woowacourse/mission-utils';
import { SYSTEM_MESSAGE } from './constants.js';

class App {
  async run() {
    await this.enterInput();
  }

  async enterInput() {
    const namesString = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_NAME);
    this.names = namesString.split(',');
    this.count = await Console.readLineAsync(SYSTEM_MESSAGE.ENTER_COUNT);
  }
}

export default App;
