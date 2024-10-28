import CarNameValidator from './validation/CarNameValidator.js';
import TargetRoundValidator from './validation/TargetRoundValidator.js';

export default class Racing {
  #racingCars;
  #round;

  static create (racingCars, round) {
    const carNames = racingCars.getCars().map((car) => car.getCarName());
    CarNameValidator.validateCarNamesDuplication(carNames);
    TargetRoundValidator.validateTargetRound(round.getTargetRound());

    return new Racing(racingCars, round);
  }

  constructor (racingCars, round) {
    this.#racingCars = racingCars;
    this.#round = round;
  }

  startNewRound () {
    this.#racingCars.moveCars();
    this.#round.nextRound();

    return this.#racingCars.getCarsState();
  }

  isFinished () {
    return this.#round.isFinished();
  }

  getWinners () {
    const maxPosition = Math.max(...this.#racingCars.getCars().map((car) => car.getMoveCount()));
    if (maxPosition === 0) {
      return [];
    }
    return this.#racingCars.getCars()
      .filter((car) => car.getMoveCount() === maxPosition)
      .map((car) => car.getCarName());
  }
}
