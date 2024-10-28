import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class Controller {
    #inputView;
    #outputView;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
    }

    async playRacingCar() {
      this.#inputView.readInput();
      this.#outputView.printResult();
    }
}

export default Controller;