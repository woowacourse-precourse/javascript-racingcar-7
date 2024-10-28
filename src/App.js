import IOProcessor from "./IOProcessor.js";
import StringParser from "./StringParser.js";
import RacingController from "./RacingController.js";
import { INPUT_MESSAGE } from "./constants.js";

class App {
  constructor() {
    this.ioProcessor = new IOProcessor();
    this.stringParser = new StringParser();
    this.racingController = new RacingController();
  }

  async run() {
    const cars = await this.ioProcessor.processInput(INPUT_MESSAGE.CARS);
    const count = await this.ioProcessor.processInput(INPUT_MESSAGE.COUNT);
    const carsString = this.stringParser.parseString(cars);
    this.racingController.run(carsString, count);
  }
}

export default App;
