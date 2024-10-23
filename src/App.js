import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import MoveCar from './MoveCar.js';

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.moveCar = new MoveCar();
  }

  async run() {
    const carNameList = await this.inputView.getCarNameInput();
    const gameCount = await this.inputView.getGameCountInput();
    this.outputView.spacing();
    this.outputView.gameResultHeader();

    this.moveCar.moveDistance(carNameList, gameCount);
  }
}

export default App;
