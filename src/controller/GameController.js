import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import MoveCar from '../MoveCar.js';
import Winner from '../Winner.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.moveCar = new MoveCar();
    this.winner = new Winner();
  }

  async prepareGame() {
    const carNameList = await this.inputView.getCarNameInput();
    const gameRound = await this.inputView.getGameCountInput();

    return [carNameList, gameRound];
  }

  runGame(carNames, gameRound) {
    this.outputView.gameResultHeader();
    const carObj = this.moveCar.moveCar(carNames, gameRound);

    return carObj;
  }

  finishGame(gameResult) {
    this.winner.checkRanking(gameResult);
  }
}

export default GameController;
