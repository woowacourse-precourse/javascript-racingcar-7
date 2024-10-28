import Car from "../models/Car.js";
import { CarValidator, PlayValidator } from "../Validator.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

class RacingController {
  async #setCarNames() {
    try {
      const carNames = await InputView.readCarNames();
      CarValidator.validate(carNames);
      return carNames.split(",").map((name) => name.trim());
    } catch (e) {
      throw e;
    }
  }

  async #setPlayCount() {
    try {
      const playCount = await InputView.readPlayCount();
      PlayValidator.validate(playCount);
      return playCount;
    } catch (e) {
      throw e;
    }
  }

  async #initCars() {
    const carNames = await this.#setCarNames();
    const playCount = await this.#setPlayCount();

    return new Car(carNames, playCount);
  }

  async run() {
    try {
      const cars = await this.#initCars();
      OutputView.printStartMessage();
      cars.startRace();

      const winners = cars.getWinners();
      OutputView.printWinners(winners);
    } catch (e) {
      throw e;
    }
  }
}

export default RacingController;
