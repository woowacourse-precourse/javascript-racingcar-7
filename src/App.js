import Input from "./Input.js";
import Race from "./Race.js";

class App {
  async run() {
    const input = new Input();
    const carList = await input.getCarNames();
    const cnt = await input.getCnt();
    const race = new Race(carList, cnt);
    race.start();
  }
}

export default App;
