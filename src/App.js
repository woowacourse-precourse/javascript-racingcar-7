import { Console } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import Game from "./Game.js";

class App {
  constructor() {
    this.IOHandler = new IOHandler();
    this.Game = new Game();
  }
  async run() {
    const inputNames = await this.IOHandler.getNameInput();
    const count = await this.IOHandler.getCountInput();

    const winner = this.Game.runRacing(count, inputNames);

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
