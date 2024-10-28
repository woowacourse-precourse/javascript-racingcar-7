import inputParser from "../utils/inputParser.js";
import { nameValidation, tryValidation } from "../utils/validators.js";
import RacingGameView from "../views/RacingGameView.js";
import RacingGameModel from "../models/RacingGameModel.js";

class RacingGameController {
  async run() {
    const carNames = await this.getCarNames();
    const tryCount = await this.getTryCount();

    RacingGameView.printStartMessage();

    const game = new RacingGameModel(carNames, Number(tryCount));

    this.playRounds(game, carNames);
    this.displayWinners(game);
  }

  async getCarNames() {
    const carNamesInput = await RacingGameView.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = inputParser(carNamesInput);
    nameValidation(carNames);

    return carNames;
  }

  async getTryCount() {
    const tryCountInput = await RacingGameView.getInput(
      "시도할 횟수는 몇 회인가요?\n"
    );
    tryValidation(tryCountInput);

    return tryCountInput;
  }

  playRounds(game, carNames) {
    for (let i = 0; i < game.tryCount; i++) {
      const roundResult = game.raceCars();
      this.displayRoundProgress(roundResult, carNames);
      RacingGameView.printRoundEnd();
    }
  }

  displayRoundProgress(roundResult, carNames) {
    roundResult.forEach((progress, index) => {
      RacingGameView.printCarProgress(carNames[index], progress);
    });
  }

  displayWinners(game) {
    const winners = game.getWinner();
    RacingGameView.printWinner(winners);
  }
}

export default RacingGameController;
