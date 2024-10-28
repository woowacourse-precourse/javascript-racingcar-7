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
    const carsArray = this.stringParser.parseString(cars);
    
    this.racingController.setCars(carsArray);
    this.racingController.setCount(count);
    this.racingController.run();
  }
}

export default App;
