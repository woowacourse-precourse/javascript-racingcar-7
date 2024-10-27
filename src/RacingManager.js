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
    repeat(round, () => {
      this.carList.forEach((car) => {
        this.#handleCarMovement(car);
      });
      OutputView.printEmptyLine();
    });
  }

  #handleCarMovement(car) {
    const movementValue = RandomNumberGenerator.create();

    if (this.#canMove(movementValue)) {
      car.move();
    }

    OutputView.printCarStatus(car);
  }

  #canMove(movementValue) {
    const MOVEMENT_THRESHOLD = 4;
    return movementValue >= MOVEMENT_THRESHOLD;
  }

  get #winnerList() {
    const carDistanceList = this.carList.map((car) => car.distance);
    const maxDistance = Math.max(...carDistanceList);
    const winnerList = this.carList
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);

    return winnerList;
  }
}

export default RacingManager;
