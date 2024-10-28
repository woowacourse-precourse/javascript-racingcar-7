import ViewIn from '../View/InputView.js';
import ViewOut from '../View/OutView.js';
import Model from '../Model/Model.js';

class Controller {
  InputView;

  OutputView;

  model;

  constructor() {
    this.InputView = new ViewIn();
    this.OutputView = new ViewOut();
    this.model = new Model();
  }

  async control() {
    const userInputObject = await this.InputView.getUserInputObject();
    this.model.setUserData(userInputObject);
    this.startGame();
    this.announceWinner();
  }

  startGame() {
    for (let round = 0; round < this.model.getGameCount(); round += 1) {
      this.round();
    }
  }

  round() {
    const CarInfos = [];

    for (let carIndex = 0; carIndex < this.model.getCarCount(); carIndex += 1) {
      this.model.play(carIndex);
      CarInfos.push(this.model.getCarInfo(carIndex));
    }

    this.OutputView.renderCarInfos(CarInfos);
  }

  announceWinner() {
    const winner = this.model.getWinner();
    this.OutputView.renderWinnerInfo(winner);
  }
}

export default Controller;
