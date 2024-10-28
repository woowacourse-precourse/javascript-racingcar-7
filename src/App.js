import RacingCarGame from "./RacingCarGame.js";

class App {
  async run() {
    const racingCarGame = new RacingCarGame();

    return racingCarGame.start();
  }
}

export default App;
