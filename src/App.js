import InputValidation from "./validation/InputValidation.js";

class App {
  input;

  output;

  game;

  constructor(input, output, game) {
    this.input = input;
    this.output = output;
    this.game = game;
  }

  async run() {
    const carNames = await this.input.getCars(InputValidation.carString);
    const repeatCount = await this.input.getRepeatCount(InputValidation.repeatCountString);

    this.game.setGame(carNames, repeatCount);

    this.output.printResultTitle();
    this.game.start();
    this.output.printWinners(this.game.getWinners());
  }
}

export default App;
