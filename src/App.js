import { Console } from "@woowacourse/mission-utils";
import { getCarsName, getAttemptNumber } from "./inputView.js";
import { checkAttemptNum, checkCarsName } from "./validation.js";
import Race from './Race.js';
import { printEachRoundResult, printWinner } from "./outputView.js";

class App {
  async run() {
    const carsNames = await getCarsName();
    const carsList = carsNames.split(",");
    checkCarsName(carsList);

    const attemptNum = await getAttemptNumber();
    checkAttemptNum(attemptNum);

    const carRace = new Race(carsList);

    printEachRoundResult(carRace, attemptNum);

    const winner = carRace.winnerResult();
    printWinner(winner);
  }
}

export default App;
