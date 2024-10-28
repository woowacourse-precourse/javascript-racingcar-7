import InputView from "../view/InputView.js";
import Validator from "./Validator.js";
import RacingCars from "../model/RacingCars.js";
import OutputView from "../view/OutputView.js";

class CarRacing {
  static #WINNER_LIST_DELIMITER = ", ";

  constructor() {}

  async init() {
    const racingCars = new RacingCars();
    await this.#registerRacingCars(racingCars);
    await this.#startRace(racingCars);
    this.#announceWinner(racingCars);
  }

  async #getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    return this.#parseCarNames(input);
  }

  #parseCarNames(input) {
    return input.split(",");
  }

  async #registerRacingCars(racingCars) {
    const carList = await this.#getCarNamesFromUserInput();
    Validator.checkCarList(carList);
    carList.forEach((carName) => {
      Validator.checkName(carName);
      racingCars.registerCar(carName);
    });
  }

  async #getMoveAttemptsFromUserInput() {
    const attempts = await InputView.readMoveAttempts();
    Validator.checkMoveAttempts(attempts);
    return attempts;
  }

  async #startRace(racingCars) {
    const raceRound = await this.#setRaceRound();
    OutputView.printBlankLine();
    OutputView.printExecutionResult();
    this.#moveCarsAndPrintProgress(racingCars, raceRound);
  }

  #moveCarsAndPrintProgress(racingCars, raceRound) {
    const racingCarList = racingCars.getAllCars();
    for (let i = 0; i < raceRound; i++) {
      racingCars.moveAllCars();
      OutputView.printRaceProgress(racingCarList);
    }
  }

  #getFinalWinner(racingCars) {
    const racingCarList = racingCars.getAllCars();
    const maxDistance = Math.max(...racingCarList.map((car) => car.position));
    const winnerList = racingCarList
      .filter((car) => car.position === maxDistance)
      .map((car) => car.name);
    return winnerList;
  }

  #announceWinner(racingCars) {
    const winnerList = this.#getFinalWinner(racingCars);
    OutputView.printFinalWinner(
      winnerList.join(CarRacing.#WINNER_LIST_DELIMITER)
    );
  }

  async #setRaceRound() {
    return await this.#getMoveAttemptsFromUserInput();
  }
}

export default CarRacing;
