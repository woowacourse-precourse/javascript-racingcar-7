import Game from "./Game.js";
import UserInput from "./UserInput.js";
import { validateUserAttempts } from "./validate.js";

class App {
  constructor() {
    this.userInput = new UserInput();
    this.game = new Game();
  }

  async run() {
    const getUserCarNames = await this.userInput.askCarNames();
    this.game.initializeCars(getUserCarNames);
    const askForAttempts = await this.userInput.askAttempts();
    const availableAttempts = validateUserAttempts(askForAttempts);
    this.game.play(availableAttempts);
  }
}

export default App;
