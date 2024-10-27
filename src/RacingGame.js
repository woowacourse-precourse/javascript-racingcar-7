import { MissionUtils } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => ({ name, position: "" }));
  }

  moveCar(car) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      car.position += "-";
    }
  }

  moveAllCars() {
    this.cars.forEach((car) => this.moveCar(car));
  }

  startRace(moveCount) {
    MissionUtils.Console.print("\n실행결과");
    for (let i = 0; i < moveCount; i++) {
      this.moveAllCars();
      this.printCurrentPositions();
    }
  }

  printCurrentPositions() {
    const currentPositions = this.cars
      .map((car) => `${car.name} : ${car.position}`)
      .join("\n");
    MissionUtils.Console.print(currentPositions);
    MissionUtils.Console.print("");
  }

  determineWinners() {
    const positionLengths = this.cars.map((car) => car.position.length);
    const maxPosition = Math.max(...positionLengths);

    const winners = this.cars
      .filter((car) => car.position.length === maxPosition)
      .map((car) => car.name);

    return winners;
  }

  printWinners() {
    const winners = this.determineWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default RacingGame;
