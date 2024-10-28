import InputValidation from "./validation/InputValidation.js";
import Input from "./view/Input.js";
import Output from "./view/Output.js";
import RacingGame from "./model/RacingGame.js";

class App {
  constructor() {
    this.input = Input;
    this.output = Output;
    this.game = new RacingGame();
  }

  async run() {
    const carNames = await this.input.getCars(InputValidation.carString);
    const repeatCount = await this.input.getRepeatCount(InputValidation.repeatCountString);

    this.game.setGame(carNames, repeatCount);
    this.game.start();

    this.output.printResults(this.game.getRaceLogs());
    this.output.printWinners(this.game.getWinners());
  }
}

export default App;
