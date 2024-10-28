import IOProcessor from "./IOProcessor.js";
import StringParser from "./StringParser.js";
import RacingController from "./RacingController.js";

class App {
  constructor() {
    this.ioProcessor = new IOProcessor();
    this.stringParser = new StringParser();
    this.racingController = new RacingController();
  }

  async run() {
    const {cars, count} = await this.ioProcessor.processInput();
    const carsString = this.stringParser.parseString(cars);
    this.racingController.run(carsString, count);
  }
}

export default App;
