import RacingGameController from "./controller.js/racingGameController.js";
class App {
  async run() {
    const gameController = new RacingGameController();
    await gameController.startGame();
  }
}

export default App;
