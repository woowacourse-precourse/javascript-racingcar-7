import { MissionUtils } from "@woowacourse/mission-utils";

class CarRaceGame {
  constructor(carProgressRecords, tryCount) {
    this.carProgressRecords = carProgressRecords;
    this.tryCount = tryCount;
  }
  shouldMoveForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  determineEachCarMovement() {
    this.carProgressRecords.forEach((car) => {
      if (!shouldMoveForward()) {
        car.position += 1;
      }
    });
  }

  printCarProgress() {
    this.carProgressRecords.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
  }

  runRaceRound() {
    this.determineEachCarMovement();
    this.printCarProgress();
  }

  startRace() {
    while (this.tryCount) {
      this.runRaceRound();
      tryCount -= 1;
    }
  }
}

export default CarRaceGame;
