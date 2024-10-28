import inputParser from "../utils/inputParser.js";
import { nameValidation, tryValidation } from "../utils/validators.js";
import OutputView from "../views/OutputView.js";
import InputView from "../views/InputView.js";
import RacingGameModel from "../models/RacingGameModel.js";

class RacingGameController {
  async run() {
    try {
      const carNames = await this.setCarnames();
      const tryCount = await this.setTryCount();

      OutputView.printStartMessage();

      const game = new RacingGameModel(carNames, Number(tryCount));

      this.playRounds(game, carNames);
      this.displayWinners(game);
    } catch (error) {
      throw new Error(error);
    }
  }

  async setCarnames() {
    const carNamesInput = await InputView.getCarNames();
    const splitedCarNames = inputParser(carNamesInput);
    nameValidation(splitedCarNames);

    return splitedCarNames;
  }

  async setTryCount() {
    const tryCountInput = await InputView.getTryCount();
    tryValidation(tryCountInput);

    return tryCountInput;
  }

  playRounds(game, carNames) {
    for (let i = 0; i < game.tryCount; i++) {
      const roundResult = game.raceCars();
      this.displayRoundProgress(roundResult, carNames);
      OutputView.printRoundEnd();
    }
  }

  displayRoundProgress(roundResult, carNames) {
    roundResult.forEach((progress, index) => {
      OutputView.printCarProgress(carNames[index], progress);
    });
  }

  displayWinners(game) {
    const winners = game.getWinner();
    OutputView.printWinner(winners);
  }
}

export default RacingGameController;
