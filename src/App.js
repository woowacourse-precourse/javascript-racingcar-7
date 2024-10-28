import CarRace from './Model/CarRace.js';
import InputView from './View/InputView.js';

class App {
  #input_view = new InputView();

  async run() {
    const carNames = await this.#input_view.readCarNamesFromInput();
    const raceCount = await this.#input_view.readRaceCountFromInput();

    const carRace = new CarRace(carNames);
  }
}

export default App;
