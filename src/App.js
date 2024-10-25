import Input from "./Input.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Input.getUserInput();
    const splitedUserInput = Input.splitUserInput(userInput);
    const tryCount = await Input.getTryCount();

    Console.print(userInput);
    Console.print(splitedUserInput);
    Console.print(tryCount);
  }
}

export default App;
