import { getInput } from "./view/input.js";

class App {
  async run() {
    const carNamesInput = await getInput(INPUT.RACE_CAR_NAME);
  }
}

export default App;
