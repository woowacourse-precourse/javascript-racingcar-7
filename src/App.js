import * as UserInput from "./UserInput.js";
import RacingGame from "./RacingGame.js";
class App {
  async run() {
    const carNames = await UserInput.enterCarNames();
    const roundCount = await UserInput.enterRoundCount();

    const game = new RacingGame(carNames);
    game.play(roundCount);
  }
}

export default App;
