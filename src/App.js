import IOProcessor from "./InputProcessor.js";

class App {
  constructor() {
    this.ioProcessor = new IOProcessor();
  }

  async run() {
    const {cars, count} = await this.ioProcessor.processInput();
    console.log(cars, count);
  }
}

export default App;
