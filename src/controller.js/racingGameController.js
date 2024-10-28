import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Car from "../model/car.js";
import {
  validateCarName,
  validateCount,
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
    await this.getUserInput();
  }

  async getUserInput() {
    try {
      await this.getCarNames();
      await this.getAttemptCounts();
    } catch (error) {
      this.handleInitError(error);
      throw error;
    }
  }

  async getCarNames() {
    const userInputNames = await this.view.inputCarNames();
    const names = userInputNames.split(",");
    this.checkCarName(names);
  }

  async getAttemptCounts() {
    const userInputCounts = await this.view.inputAttemptCounts();
    this.checkCount(userInputCounts);
    this.counts = userInputCounts;
  }

  handleInitError(error) {
    this.view.printError(error.message);
  }

  checkCarName(names) {
    names.forEach((element) => {
      const name = element.trim();
      validateCarName(name);
      this.cars.push(new Car(name));
    });
  }

  checkCount(count) {
    validateCount(count);
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
    try {
      await this.init();
      this.view.printExecutionResult();
      for (let i = 0; i < this.counts; i++) {
        this.getScores();
      }
      this.printWinner();
    } catch (error) {
      throw error;
    }
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
