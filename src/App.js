import ConsoleInput from './presentation/ConsoleInput.js';
import ConsoleOutput from './presentation/ConsoleOutput.js';
import RacingService from './application/RacingService.js';

class App {
  #racingService;

  constructor () {
    this.#racingService = new RacingService(ConsoleInput, ConsoleOutput);
  }

  async run () {
    await this.#racingService.execute();
  }
}

export default App;
