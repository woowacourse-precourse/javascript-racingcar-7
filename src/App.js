import RacingGame from "./RacingGame.js";
import View from "./View.js";

class App {
  async run() {
    const {carNames, tryCount} = await this.readLineGameInputs();

    const game = new RacingGame();

    game.getInitialBoard(carNames);
    game.getRacingResult(tryCount);

    const scoreBoard = game.getScoreBoard();
    View.printRoundScore(tryCount, scoreBoard);

    const finalWinner = game.getWinner(scoreBoard);
    View.printFinalWinner(finalWinner);
  }

  async readLineGameInputs() {
    const carNames = await View.readLineCarNames();
    const tryCount = await View.readLineTryCount();
    return {carNames, tryCount}
  }
}

export default App;
