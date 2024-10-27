import RacingGame from "./models/RacingGame.js";
import InputView from "./views/InputView.js";

class App {
  async run() {
    const carNames = await InputView.requestCarNames();
    const attempts = await InputView.requestAttempts();

    const game = new RacingGame(carNames);
    await game.play(attempts);
  }
}

export default App;