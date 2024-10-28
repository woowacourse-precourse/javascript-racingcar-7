import IOProcessor from "./InputProcessor.js";
import StringParser from "./StringParser.js";

class App {
  constructor() {
    this.ioProcessor = new IOProcessor();
    this.stringParser = new StringParser();
  }

  async run() {
    const {cars, count} = await this.ioProcessor.processInput();
    const carsArray = this.stringParser.parseString(cars);
  }
}

export default App;
