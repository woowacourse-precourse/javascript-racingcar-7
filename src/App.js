import Game from './Game.js';
import Input from './Input.js';

class App {
  inputHandler = new Input();

  async run() {
    const { names, repetitionString } = await this.inputHandler.get();
    const game = new Game(names, Number(repetitionString));
  }
}

export default App;
