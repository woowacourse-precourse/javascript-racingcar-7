import {Console} from "@woowacourse/mission-utils";
import {Input} from "./Input.js";


class App {
  async run() {
    const input = new Input();
    const cars = await input.getInput();
    Console.print(cars);
  }
}

export default App;
