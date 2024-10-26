import { getCarsName, getAttemptNumber } from "./views/inputView.js";
import { checkAttemptNum, checkCarsName } from "./validation.js";
import Race from './Race.js';
import { printEachRoundResult, printWinner } from "./views/outputView.js";

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
