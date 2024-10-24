import { Console } from '@woowacourse/mission-utils';

import { PRINT_MESSAGE } from './constants.js';

class App {
  async run() {
    const carNamesInput = await this.getCarNamesInput();
  }

  async getCarNamesInput() {
    const input = await Console.readLineAsync(PRINT_MESSAGE.INPUT_CAR_NAMES);

    return input.replace(/ /g, '');
  }
}

export default App;
