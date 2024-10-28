import RacingGameController from "./controller/racingGameController.js";
class App {
  async run() {
    const gameController = new RacingGameController();
    await gameController.startGame();
  }
}

export default App;
