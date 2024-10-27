import RacingCarController from './controller/RacingCarController.js';
import RacingCarService from './service/RacingCarService.js';
import { InputView } from './view/InputView.js';
import { OutputView } from './view/OutputView.js';

class App {
  #racingCarController;
  constructor() {
    this.#racingCarController = new RacingCarController(
      new RacingCarService(),
      new InputView(),
      new OutputView(),
    );
  }

  async run() {
    await this.#racingCarController.run();
  }
}

export default App;
