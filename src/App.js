import Input from "./Input.js";
import Validator from "./Validator.js";
import Race from "./Race.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInput = await Input.getUserInput();
    const splitedUserInput = Input.splitUserInput(userInput);
    const tryCount = await Input.getTryCount();

    if (
      Validator.validateCarName(splitedUserInput) &&
      Validator.validateTryCount(tryCount)
    ) {
      const race = new Race(splitedUserInput, tryCount);
      race.startRace();

      Console.print(race.carPositions);
    }
  }
}

export default App;
