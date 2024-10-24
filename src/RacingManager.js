import InputView from "./InputView.js";
import Car from "./Car.js";
import InputValidation from "./validation.js";
import { repeat } from "./utils.js";
import RandomNumberGenerator from "./RandomNumberGenerator.js";
import OutputView from "./OutputView.js";
class RacingManager {
  carList = [];

  async play() {
    const carNameList = await InputView.readCarNameList();
    InputValidation.validateCarNameList(carNameList);
    this.#setCarList(carNameList);

    const attemptLimit = Number(await InputView.readAttemptLimit());
    InputValidation.validateAttemptLimit(attemptLimit);

    this.#playRounds(attemptLimit);
  }

  #setCarList(carNameList) {
    this.carList = carNameList.map((carName) => new Car(carName));
  }

  #playRounds(round) {
    repeat(round, () => {});
  }
}

export default RacingManager;
