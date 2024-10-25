import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import GameService from '../service/GameService.js';
import Winner from '../Winner.js';

class GameController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.gameService = new GameService();
    this.winner = new Winner();
  }

  async prepareGame() {
    const carNameList = await this.inputView.getCarNameInput();
    const gameRound = await this.inputView.getGameCountInput();

    return [carNameList, gameRound];
  }

  runGame(carNames, gameRound) {
    this.outputView.gameResultHeader();
    const carObj = this.gameService.moveCar(carNames, gameRound);

    return carObj;
  }

  finishGame(gameResult) {
    this.winner.checkRanking(gameResult);
  }
}

export default GameController;
