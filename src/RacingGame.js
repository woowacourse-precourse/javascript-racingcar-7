import RaceManager from "./RaceManager.js";

class RacingGame {
  constructor(carNames) {
    this.carName = carNames.map((carName) => new RaceManager(carName));
  }
}
export default RacingGame;
