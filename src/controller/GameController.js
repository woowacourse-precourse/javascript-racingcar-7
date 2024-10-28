import { Validator } from "../utils/Validator.js";
import { ErrorView } from "../view/ErrorView.js";
import { Input } from "../view/Input.js";
import { Output } from "../view/Output.js";

export class GameController {
  async playGame() {
    const input = new Input();
    const output = new Output();
    const validator = new Validator();
    const errorView = new ErrorView();

    try {
      const carNames = await input.getCarNames();
      validator.validateCarNames(carNames);

      const round = await input.getRound();
      validator.validateRound(round);
    } catch (error) {
      errorView.printError(error.message);
    }
  }
}
