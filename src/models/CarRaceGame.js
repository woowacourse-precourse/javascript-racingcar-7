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
      if (this.shouldMoveForward()) {
        car.position += 1;
      }
    });
  }

  printCarProgress() {
    let order = 1;
    this.carProgressRecords.forEach((car) => {
      MissionUtils.Console.print(
        `${order}: ${car.name} : ${"-".repeat(car.position)}`
      );
      order += 1;
    });
  }

  runRaceRound() {
    this.determineEachCarMovement();
    this.printCarProgress();
  }

  startRace() {
    while (this.tryCount) {
      this.runRaceRound();
      this.tryCount -= 1;
    }
  }

  #getMaxPosition() {
    return this.carProgressRecords.reduce((max, car) => {
      if (car.position > max) {
        return car.position;
      }
      return max;
    }, 0); 
  } 

  getWinnersList(maxPosition) {
    return this.carProgressRecords
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  printRaceResults() {
    const maxPosition = this.#getMaxPosition();
    const winnersList = this.getWinnersList(maxPosition);
  }
}

export default CarRaceGame;
