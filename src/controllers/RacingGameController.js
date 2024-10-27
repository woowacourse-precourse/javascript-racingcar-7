import inputParser from "../utils/inputParser.js";
import { nameValidation, tryValidation } from "../utils/validators.js";
import RacingGameView from "../views/RacingGameView.js";

class RacingGameController {
  async run() {
    const carNamesInput = await RacingGameView.getInput(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = inputParser(carNamesInput);
    nameValidation(carNames);

    const tryCountInput = await RacingGameView.getInput(
      "시도할 횟수는 몇 회인가요?\n"
    );
    tryValidation(tryCountInput);

    RacingGameView.printStartMessage();

    const game = new RacingGameModel(carNames, Number(tryCountInput));

    for (let i = 0; i < game.tryCount; i++) {
      const roundResult = game.raceCars();
      roundResult.forEach((progress, index) => {
        RacingGameView.printCarProgress(carNames[index], progress);
      });
      RacingGameView.printRoundEnd();
    }
  }
}

export default RacingGameController;
