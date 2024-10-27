import RaceManager from "./RaceManager.js";

class RacingGame {
  constructor(carNames) {
    this.carName = carNames.map((carName) => new RaceManager(carName));
  }

  play(roundCount) {
    for (let round = 0; round < roundCount; round++) {
      this.playOneRound();
    }
  }

  playOneRound() {
    this.carName.forEach((car) => {
      const randomNumber = car.createRandomNumber();
      car.move(randomNumber);
    });
  }
}
export default RacingGame;
