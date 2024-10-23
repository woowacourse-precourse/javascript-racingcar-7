import CarRacingView from "../view/CarRacingView.js";

export default class CarRacingController {
  constructor() {
    this.view = new CarRacingView();
    this.carNames = [];
    this.tryCount = 0;
  }

  async startGame() {
    const carNamesInput = await this.view.getCarNames();
    const tryCountInput = await this.view.getTryCount();
    console.log(carNamesInput, tryCountInput);
  }
}
