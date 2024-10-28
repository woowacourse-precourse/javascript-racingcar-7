import View from "./View.js";

class App {
  #input = new View();
  async run() {
    const names = await this.#input.readInputCar();
    const raceCount = await this.#input.readInputRaceCount();
  }
}

export default App;
