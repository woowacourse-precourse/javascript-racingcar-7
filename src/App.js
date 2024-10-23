import {input} from "./input.js";
import {racingCars} from "./racing.js";

class App {
  async run() {
    await racingCars()
  }
}

export default App;
