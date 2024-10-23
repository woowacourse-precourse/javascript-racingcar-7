import RacingManager from "./RacingManager.js";

class App {
  #racingManager = new RacingManager();

  async run() {
    await this.#racingManager.play();
  }
}

export default App;
