import Game from './components/Game.js';
import Input from './components/Input.js';
import Output from './components/Output.js';
import validateNames from './utils/validation/validateNames.js';
import validateRepetitionString from './utils/validation/validateRepetitionString.js';

class App {
  async run() {
    const { names, repetitionString } = await Input.get();
    validateNames(names);
    validateRepetitionString(repetitionString);

    const game = new Game(names, Number(repetitionString));
    const winners = game.play();
    Output.printResult(winners);
  }
}

export default App;
