import Game from './Game.js';
import Input from './Input.js';
import Output from './Output.js';
import validateNames from './utils/validation/validateNames.js';
import validateRepetitionString from './utils/validation/validateRepetitionString.js';

class App {
  inputHandler = new Input();

  async run() {
    const { names, repetitionString } = await this.inputHandler.get();
    validateNames(names);
    validateRepetitionString(repetitionString);

    const game = new Game(names, Number(repetitionString));
    const winners = game.play();
    Output.printResult(winners);
  }
}

export default App;
