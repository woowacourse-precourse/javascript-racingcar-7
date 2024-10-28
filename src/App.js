import Input from "./input.js";
import Output from "./output.js";
import raceHandler from "./raceHandler.js";

class App {
  async run() {
    const { vehicleNames, attemptCount } = await Input();

    const result = raceHandler(vehicleNames, attemptCount);

    Output(result);
  }
}

export default App;
