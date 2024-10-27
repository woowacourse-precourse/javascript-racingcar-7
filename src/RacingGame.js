import { inputHandler, outputHandler } from "./views/index.js";
import { GAME_MESSAGES, RULES } from "./constants/index.js";
import { carNameParser, randomNumber } from "./utils/index.js";
import { validateCarNames } from "./validation/validateCarName.js";
import { Car } from "./models/index.js";

class RacingGame {
  #cars;
  #tryCount;

  async startGame() {
    const carNames = await inputHandler.carNameInput();
    const parsedNames = carNameParser(carNames);
    validateCarNames(parsedNames);

    this.#cars = parsedNames.map((name) => new Car(name));
    this.#tryCount = Number(await inputHandler.racingTryCountInput());

    await this.playGame();
  }

  async playGame() {
    outputHandler.printMessage(GAME_MESSAGES.RESULT);

    for (let i = 0; i < this.#tryCount; i++) {
      this.playRound();
      outputHandler.printRoundResult(this.#cars);
      outputHandler.printMessage("");
    }

    this.endGame();
  }

  playRound() {
    this.#cars.forEach((car) => {
      const number = randomNumber(
        RULES.RANDOM_MIN_NUMBER,
        RULES.RANDOM_MAX_NUMBER
      );
      if (this.#shouldProgress(number)) {
        car.moveForward();
      }
    });
  }

  #shouldProgress(number) {
    return number >= RULES.MIN_PROGRESS_STEPS;
  }

  endGame() {
    const winners = this.#getWinners();
    outputHandler.printMessage(`${GAME_MESSAGES.WINNER}${winners.join(", ")}`);
  }

  #getWinners() {
    const maxPosition = Math.max(
      ...this.#cars.map((car) => car.getCarPosition())
    );

    return this.#cars
      .filter((car) => car.getCarPosition() === maxPosition)
      .map((car) => car.getCarName());
  }
}

export default RacingGame;
