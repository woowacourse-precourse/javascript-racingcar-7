import { Console } from '@woowacourse/mission-utils';
import RacingController from './controller/racingController.js';

class App {
  constructor() {
    this.controller = new RacingController();
  }

  async run() {
    try {
      await this.controller.getCarNames();
      await this.controller.getCount();
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
