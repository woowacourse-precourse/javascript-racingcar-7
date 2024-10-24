import RacingGame from "./RacingGame.js";

class App {
  racingGame = new RacingGame()
  async run() {
     return await this.racingGame.start()
  }
}

export default App;
