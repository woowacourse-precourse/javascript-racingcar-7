import InputView from "../view/InputView.js";
import Validator from "./Validator.js";
import RacingCars from "../model/RacingCars.js";
import { getRandomDigit } from "../utils/random.js";
import OutputView from "../view/OutputView.js";

class CarRace {
  constructor() {}

  async init() {
    const racingCars = new RacingCars();
    await this.registerRacingCars(racingCars);
    this.startRace(racingCars, racingCars.getAllCars());
  }

  async startRace(racingCars, racingCarArray) {
    const moveAttempts = await this.setMoveAttempts();
    OutputView.executionResult();
    for (let i = 0; i < moveAttempts; i++) {
      racingCars.moveAllCars();
      OutputView.raceProgress(racingCarArray);
    }
  }

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    return this.parseCarNames(input);
  }

  async getMoveAttemptsFromUserInput() {
    const attempts = await InputView.readMoveAttempts();
    Validator.checkMoveAttempts(attempts);
    return attempts;
  }

  parseCarNames(input) {
    return input.split(",");
  }

  async registerRacingCars(racingCars) {
    const carList = await this.getCarNamesFromUserInput();
    Validator.checkCarList(carList);
    console.log(carList);
    carList.forEach((carName) => {
      Validator.checkName(carName);
      racingCars.registerCar(carName);
    });
  }

  async setMoveAttempts() {
    return await this.getMoveAttemptsFromUserInput();
  }
}

export default CarRace;
