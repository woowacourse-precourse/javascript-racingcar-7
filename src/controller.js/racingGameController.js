import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Car from "../model/car.js";
import {
  validateCarName,
  countValidate,
  resetCarSet,
} from "../utils/validation.js";
import RacingGameView from "../view/racingGameView.js";
class RacingGameController {
  constructor() {
    this.cars = [];
    this.counts = "";
    this.view = new RacingGameView();
  }

  async init() {
    while (true) {
      const isValidInput = await this.getUserInput();
      if (isValidInput) {
        break;
      }
    }
  }

  async getUserInput() {
    try {
      const userInputNames = await this.view.inputCarNames();
      const names = userInputNames.split(",");
      this.checkCarName(names);
      const userInputCounts = await this.view.inputAttemptCounts();
      countValidate(userInputCounts);
      this.counts = userInputCounts;
      return true;
    } catch (error) {
      this.handleInitError(error);
      return false;
    }
  }

  handleInitError(error) {
    Console.print(error.message);
    this.cars = [];
    resetCarSet();
  }

  checkCarName(names) {
    names.forEach((element) => {
      const name = element.trim();
      validateCarName(name);
      this.cars.push(new Car(name));
    });
  }

  getScores() {
    this.cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.score += "-";
      }
      this.view.printCarStatus(car.name, car.score);
    });
    this.view.printEmptyLine();
  }

  async startGame() {
    await this.init();
    this.view.printExecutionResult();
    for (let i = 0; i < this.counts; i++) {
      this.getScores();
    }
    this.printWinner();
  }

  printWinner() {
    let winners = "";
    let maxScore = 0;
    this.cars.forEach((e) => {
      if (maxScore == e.score.length) {
        winners += `, ${e.name}`;
      } else if (maxScore <= e.score.length) {
        maxScore = e.score.length;
        winners = e.name;
      }
    });
    this.view.printWinners(winners);
  }
}

export default RacingGameController;
