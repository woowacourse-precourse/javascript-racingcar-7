import CarRacingModel from "../model/CarRacingModel.js";
import ValidateCarNamesInput from "../utils/validateCarNamesInput.js";
import CarRacingView from "../view/CarRacingView.js";

export default class CarRacingController {
  constructor() {
    this.view = new CarRacingView();
    this.model = null;
  }

  async startGame() {
    const carNamesInput = await this.view.getCarNames();
    const validatedCarNamesInput =
      ValidateCarNamesInput.validate(carNamesInput);
    const tryCountInput = await this.view.getTryCount();

    this.view.showRacingResult();

    this.model = new CarRacingModel(validatedCarNamesInput);
    this.model.runRace(parseInt(tryCountInput, 10));

    const winners = this.model.getWinners();
    this.view.showWinners(winners);
  }
}
