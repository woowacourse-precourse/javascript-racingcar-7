import Game from './Game.js';
import Input from './Input.js';
import Output from './Output.js';
import Validator from './Validator.js';

class App {
  inputHandler = new Input();

  async run() {
    const { names, repetitionString } = await this.inputHandler.get();
    Validator.validateNames(names);
    Validator.validateRepetitionString(repetitionString);

    const game = new Game(names, Number(repetitionString));
    const winners = game.play();
    Output.printResult(winners);
  }
}

export default App;
