import { GameManager } from "./GameManager";
import { read, print, random } from "./lib/utils";

class App {
  constructor() {
    this.io = {
      read,
      print,
    };
    this.random = random;
    this.gameManager = new GameManager(this.io, this.random);
  }

  async run() {
    try {
      await this.gameManager.play();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
