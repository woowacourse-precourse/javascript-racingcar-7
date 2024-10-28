import InputValidator from "../utils/InputValidator.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RaceManager from "../domain/RaceManager.js";

class CarRacingController {
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
      console.error("게임 실행 중 오류 발생:", error.message);
      throw error;
    }
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
    OutputView.printRaceStatus(this.#raceManager.getCars());
  }

  announceWinners() {
    const winners = this.#raceManager.findWinners();
    OutputView.printWinners(winners);
  }
}

export default CarRacingController;
