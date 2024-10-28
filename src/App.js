import ConsoleInput from './presentation/ConsoleInput.js';
import RacingService from './application/RacingService.js';

class App {
  #racingService;

  constructor () {
    this.#racingService = new RacingService(ConsoleInput);
  }

  async run () {
    await this.#racingService.execute();
  }
}

export default App;
