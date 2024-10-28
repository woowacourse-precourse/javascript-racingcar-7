import { CAR_NAME_DELIMITER } from "../libs/constants.js";
import { validateRacerAmount, validateRounds } from "../libs/validate.js";
import Car from "./Car.js";

export default class Race {
  #racers;
  #rounds;
  /**
   *
   * @param {number} rounds
   * @param {Car[]} racers
   */
  constructor(racers, rounds) {
    validateRacerAmount(racers.length);
    validateRounds(rounds);
    this.#racers = racers;
    this.#rounds = rounds;
  }

  getRounds() {
    return this.#rounds;
  }

  startRound() {
    this.#racers.forEach((racer) => racer.attemptMove());
  }

  getCurrentStatus() {
    return this.#racers.map((racer) => ({ name: racer.getName(), position: racer.getPosition() }));
  }

  getFinalWinner() {
    const maxPosition = Math.max(...this.#racers.map((racer) => racer.getPosition()));
    return this.#racers
      .filter((racer) => racer.getPosition() === maxPosition)
      .map((racer) => racer.getName())
      .join(CAR_NAME_DELIMITER);
  }
}
