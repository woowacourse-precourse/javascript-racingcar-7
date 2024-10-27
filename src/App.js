import GameController from './controller/GameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async run() {
    const [carNames, gameRound] = await this.gameController.prepareGame();
    const gameResult = this.gameController.runGame(carNames, gameRound);
    this.gameController.finishGame(gameResult);
  }
}

export default App;
