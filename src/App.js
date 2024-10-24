import { Console } from '@woowacourse/mission-utils';
import IO_MESSAGE from './constant/ioMessage.js';

class App {
  async run() {
    const CAR_NAMES = await this.getInput(IO_MESSAGE.INPUT_CAR_NAME);
    const TRY_COUNT = await this.getInput(IO_MESSAGE.INPUT_TRY_COUNT);
  }

  async getInput(message) {
    return Console.readLineAsync(message);
  }
}

export default App;
