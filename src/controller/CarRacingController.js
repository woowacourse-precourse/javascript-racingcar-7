import InputValidator from "../utils/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RaceManager from "../domain/RaceManager.js";

export default class CarRacingController {
  #raceManager;

  constructor() {
    this.#raceManager = new RaceManager();
  }

  async play() {
    try {
      await this.#initializeGame();
      await this.#raceLoop();
      this.announceWinners();
    } catch (error) {
      throw error;
    }
  }

  setCars(cars) {
    this.#raceManager.setCars(cars);
  }

  async #initializeGame() {
    await this.#initializeCars();
    await this.#initializeAttempts();
  }

  async #initializeCars() {
    const carNamesInput = await InputView.readCarNames();
    const carNames = InputValidator.validateCarNames(carNamesInput);
    this.#raceManager.createCars(carNames);
  }

  async #initializeAttempts() {
    const attemptsInput = await InputView.readAttempts();
    const validatedAttempts = InputValidator.validateAttempts(attemptsInput);
    this.#raceManager.setAttempts(validatedAttempts);
  }

  async #raceLoop() {
    const attempts = this.#raceManager.getAttempts();
    for (let i = 0; i < attempts; i++) {
      await this.#processRaceRound();
    }
  }

  async #processRaceRound() {
    this.#raceManager.moveAllCars();
    this.#displayRaceStatus();
  }

  #displayRaceStatus() {
    OutputView.printRaceStatus(this.#raceManager.getCars());
  }

  announceWinners() {
    const winners = this.#raceManager.findWinners();
    OutputView.printWinners(winners);
  }
}