import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import carNameSplit from "../utils/carNameSplit.js";

class Controller {
    #inputView;
    #outputView;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
    }

    async playRacingCar() {
      const [carNameData, numberOfAttemptsData] = await this.#inputView.readInput();
      const carNameArray = carNameSplit(carNameData);
      this.#outputView.printResult();
    }
}

export default Controller;