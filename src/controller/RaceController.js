import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import CarNameValidations from "../validations/CarNameValidations.js";
import RaceCountValidations from "../validations/RaceCountValidations.js";
import parseStringToArray from "../utils/parseStringToArray.js";
import RaceService from "../service/RaceService.js";

class RaceController {
  async start() {
    const carNames = await this.getValidatedCarNames();
    const raceCount = await this.getValidatedRaceCount();
    const raceService = new RaceService(carNames);

    OutputView.printRaceStartMessage();

    Array.from({ length: raceCount }, () => {
      const raceRoundResult = raceService.performRaceRound();
      raceRoundResult.forEach(({ carName, forwardCount }) => {
        OutputView.printRoundResult(carName, forwardCount);
      })
      OutputView.printNewLine();
    });

    OutputView.printWinner(raceService.getRaceWinner());
  }

  async getValidatedCarNames() {
    const carNamesInput = await InputView.readCarNameInput();
    const carNames = parseStringToArray(carNamesInput);
    CarNameValidations(carNames);
    return carNames;
  }

  async getValidatedRaceCount() {
    const raceCount = await InputView.readRaceCountInput();
    RaceCountValidations(raceCount);
    return raceCount;
  }
}

export default RaceController;
