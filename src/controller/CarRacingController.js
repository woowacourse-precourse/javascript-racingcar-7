import CarRacingModel from "../model/CarRacingModel.js";
import CarRacingView from "../view/CarRacingView.js";

export default class CarRacingController {
  constructor() {
    this.view = new CarRacingView();
    this.model = null;
  }

  async startGame() {
    const carNamesInput = await this.view.getCarNames();
    const tryCountInput = await this.view.getTryCount();
    this.view.showRacingResult();

    this.model = new CarRacingModel(carNamesInput);
    this.model.runRace(parseInt(tryCountInput, 10));
  }
}
