import InputView from './View/InputView.js';

class App {
  #input_view = new InputView();

  async run() {
    const carNames = await this.#input_view.readCarNamesFromInput();
    const raceCount = await this.#input_view.readRaceCountFromInput();

    console.log('carNames: ', carNames);
    console.log('raceCount: ', raceCount);
  }
}

export default App;
