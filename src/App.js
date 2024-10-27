import RacingCarGame from "./RacingCarGame.js";

class App {
  async run() {
    const racingCarGame = new RacingCarGame();

    racingCarGame.start();
  }
}

export default App;
