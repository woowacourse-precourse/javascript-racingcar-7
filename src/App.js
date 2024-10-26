import { Console } from '@woowacourse/mission-utils';
import RacingController from './controller/racingController.js';

class App {
  constructor() {
    this.controller = new RacingController();
  }

  async run() {
    await this.controller.start();
  }
}

export default App;
