import { MissionUtils } from "@woowacourse/mission-utils";

const DELIMITER = ",";
const MOVING_FORWARD_POINT = 4;

class CarRaceGame {
  constructor(carProgressRecords, tryCount) {
    this.carProgressRecords = carProgressRecords;
    this.tryCount = tryCount;
  }

  #isMovable() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= MOVING_FORWARD_POINT;
  }

  #calculateMaxCarPosition() {
    return this.carProgressRecords.reduce((maxPosition, car) => {
      return car.position > maxPosition ? car.position : maxPosition;
    }, 0);
  }

  #getWinnersList(maxPosition) {
    return this.carProgressRecords
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  startRace() {
    this.printRaceStart();

    for (let i = this.tryCount; i > 0; i -= 1) {
      this.runRaceRound();
    }
  }

  printRaceResults() {
    const maxPosition = this.#calculateMaxCarPosition();
    const winnersList = this.#getWinnersList(maxPosition);

    MissionUtils.Console.print(`최종 우승자 : ${winnersList.join(DELIMITER + ' ')}`);
  }

  printRaceStart() {
    MissionUtils.Console.print("\n실행 결과");
  }

  runRaceRound() {
    this.updateCarPositions();
    this.printCarPositions();
  }

  updateCarPositions() {
    this.carProgressRecords.forEach((car) => {
      if (this.#isMovable()) {
        car.position += 1;
      }
    });
  }

  printCarPositions() {
    this.carProgressRecords.forEach((car, index) => {
      MissionUtils.Console.print(
        `${index + 1}: ${car.name} : ${"-".repeat(car.position)}`
      );
    });
    MissionUtils.Console.print("");
  }
}

export default CarRaceGame;
