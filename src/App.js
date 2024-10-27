import Input from "./view/Input.js";
import RacingGame from "./model/RacingGame.js";

class App {
  input;

  constructor() {
    this.input = new Input();
  }

  async run() {
    const cars = await this.input.getCars();
    const repeatCount = await this.input.getRepeatCount();

    const game = new RacingGame(repeatCount, cars);
    game.start();
  }
}

export default App;
