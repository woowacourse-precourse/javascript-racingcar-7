import Input from "./Input.js";
import Race from "./Race.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = new Input();
      const carList = await input.getCarNames();
      const cnt = await input.getCnt();
      const race = new Race(carList, cnt);
      race.start();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
