import { Console } from "@woowacourse/mission-utils";
import IOHandler from "./IOHandler.js";
import Utils from "./Utils.js";

class App {
  constructor() {
    this.cars = [];
    this.IOHandler = new IOHandler();
    this.Utils = new Utils();
  }
  async run() {
    const inputNames = await this.IOHandler.getNameInput();
    const count = await this.IOHandler.getCountInput();

    this.cars = this.Utils.runRacing(count, inputNames);

    const winner = this.Utils.getWinner(this.cars);

    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
