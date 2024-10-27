import InputValidation from "./validation/InputValidation.js";

class App {
  input;

  game;

  constructor(input, game) {
    this.input = input;
    this.game = game;
  }

  async run() {
    const carNames = await this.input.getCars(InputValidation.carString);
    const repeatCount = await this.input.getRepeatCount(InputValidation.repeatCountString);

    this.game.setGame(carNames, repeatCount);
    this.game.start();
  }
}

export default App;
