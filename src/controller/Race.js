import { OutputView } from "../view/OutputView.js";
import { displayRoundResult } from "../utils/displayRoundResult.js";
import { moveForwardEachCar } from "../utils/moveForwardEachCar.js";
import { determineWinners } from "../utils/determineWinners.js";

export class Race {
  constructor(cars, round) {
    this.cars = cars;
    this.round = round;
    this.outputView = new OutputView();
  }

  start() {
    this.outputView.printNewLine();
    this.outputView.printResultStart();
    for (let i = 0; i < this.round; i++) {
      moveForwardEachCar(this.cars);
      displayRoundResult(this.cars);
    }

    this.outputView.printWinner(determineWinners(this.cars));
  }
}
