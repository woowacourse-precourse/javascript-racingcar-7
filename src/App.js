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

      const carScores = race.getScores();
      const winners = race.determineWinners(carScores);
      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    }
  }
}

export default App;
