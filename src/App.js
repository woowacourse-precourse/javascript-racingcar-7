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
    const gameRound = await this.inputView.getGameCountInput();
    this.outputView.spacing();
    this.outputView.gameResultHeader();

    const gameResult = this.moveCar.moveCar(carNameList, gameRound);
  }
}

export default App;
