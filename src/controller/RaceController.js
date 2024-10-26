import OutputView from "../view/OutputView.js";
import RaceService from "../service/RaceService.js";
import getValidatedCarNames from "../helpers/getValidatedCarNames.js";
import getValidatedRaceCount from "../helpers/getValidatedRaceCount.js";

class RaceController {
  async start() {
    const carNames = await getValidatedCarNames();
    const raceCount = await getValidatedRaceCount();
    const raceService = new RaceService(carNames);

    OutputView.printRaceStartMessage();

    Array.from({ length: raceCount }, () => {
      const raceRoundResult = raceService.performRaceRound();

      raceRoundResult.forEach(({ carName, forwardCount }) => {
        OutputView.printRoundResult(carName, forwardCount);
      });

      OutputView.printNewLine();
    });

    OutputView.printWinner(raceService.getRaceWinner());
  }
}

export default RaceController;
