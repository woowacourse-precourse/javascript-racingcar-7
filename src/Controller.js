import ViewIn from './InputView.js';
import ViewOut from './OutView.js';
import Model from './Model.js';

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

  getWinner() {
    this.model.getWinner();
    this.OutputView.renderWinnerInfo();
  }
}

export default Controller;
