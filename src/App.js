import RacingController from './controller/racingController.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.controller = new RacingController();
  }

  async run() {
    try {
      await this.controller.getCarNames();
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
