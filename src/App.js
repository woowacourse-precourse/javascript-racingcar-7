import RacingGame from "./RacingGame.js";
import View from "./View.js";

class App {
  async run() {
    const {carNames, tryCount} = await this.readLineGameInputs();

    const game = new RacingGame();
    game.getInitialBoard(carNames);

    const scoreBoard = game.getScoreBoard();
    const racingRoundResult = game.getRacingRoundResult(scoreBoard, tryCount);

    View.printRoundScore(tryCount, racingRoundResult);

    const finalWinner = game.getWinner(racingRoundResult);

    View.printFinalWinner(finalWinner);
  }

  async readLineGameInputs() {
    const carNames = await View.readLineCarNames();
    const tryCount = await View.readLineTryCount();
    return {carNames, tryCount}
  }
}

export default App;
