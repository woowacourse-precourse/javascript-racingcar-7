import RacingGame from "./RacingGame.js";
class App {
  async run() {
    const racingGame = new RacingGame();
    await racingGame.startGame();
  }
}

export default App;
