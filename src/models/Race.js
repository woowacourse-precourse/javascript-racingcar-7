import { validateRacerAmount, validateRounds } from "../libs/validate.js";
import Car from "./Car.js";

export default class Race {
  /**
   *
   * @param {number} rounds
   * @param {Car[]} racers
   */
  constructor(racers, rounds) {
    validateRacerAmount(racers.length);
    validateRounds(rounds);
    this.racers = racers;
    this.rounds = rounds;
    this.winner = [];
  }
  getRounds() {
    return this.rounds;
  }
  startRound() {
    this.racers.forEach((racer) => racer.attemptMove());
  }
  getCurrentStatus() {
    return this.racers.map((racer) => ({ name: racer.name, position: racer.position }));
  }

  getFinalWinner() {
    const maxPosition = Math.max(...this.racers.map((racer) => racer.position));
    return this.racers
      .filter((racer) => racer.position === maxPosition)
      .map((racer) => racer.name)
      .join(",");
  }
}
