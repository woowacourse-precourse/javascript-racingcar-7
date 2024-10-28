import { splitByComma } from './utils/splitByComma.js';
import { generateRandomNumber } from './utils/generateRandomNumber.js';
import InputView from './views/InputView.js';
import Car from './Car.js';
import Validator from './Validator.js';
import OutputView from './views/OutputView.js';

const MOVE_THRESHOLD = 4;

class Race {
  #carInstance;

  async play() {
    const carNames = await InputView.inputNames();
    const carsList = splitByComma(carNames);
    this.#carInstance = carsList.map((name) => new Car(name));

    const raceAttempt = await InputView.inputAttempt();
    const validAttempt = this.#validateAttempt(raceAttempt);

    OutputView.printResultMessage();

    for (let i = 0; i < validAttempt; i++) {
      this.#executeRound();
      OutputView.printRountResult(this.#carInstance);
    }

    const winners = this.#determineWinner();
    OutputView.printWinner(winners);
  }

  #canMoveForward() {
    const randomNumber = generateRandomNumber();

    if (randomNumber < MOVE_THRESHOLD) return false;
    return true;
  }

  #executeRound() {
    for (let car of this.#carInstance) {
      const isMove = this.#canMoveForward();

      if (isMove) {
        car.moveForward();
      }
    }
  }

  #getMaxDistance() {
    let maxDistance = 0;

    for (let car of this.#carInstance) {
      const distance = car.getDistance();

      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }

    return maxDistance;
  }

  #determineWinner() {
    const winners = [];
    const winnerDistance = this.#getMaxDistance();

    for (let car of this.#carInstance) {
      const distance = car.getDistance();

      if (distance === winnerDistance) {
        const carName = car.getName();
        winners.push(carName);
      }
    }

    return winners;
  }

  #validateAttempt(attempt) {
    const validator = new Validator();
    return validator.validateAttempt(attempt);
  }
}

export default Race;
