import { MIN_MOVE_THRESHOLD, ERROR_MESSAGES } from "./Constants.js";
import { Console, Random } from "@woowacourse/mission-utils";

class Race {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
    this.carPositions = this.initializeCarPositions(cars);
  }

  initializeCarPositions(cars) {
    const carPositions = {};
    cars.forEach((car) => {
      carPositions[car] = "";
    });
    return carPositions;
  }

  canMoveToForward(num) {
    return num >= MIN_MOVE_THRESHOLD;
  }

  startRace() {
    let attempt = 0;
    while (attempt < this.tryCount) {
      this.cars.forEach((car) => {
        if (this.canMoveToForward(Random.pickNumberInRange(0, 9))) {
          this.carPositions[car] += "-";
        }
        Console.print(`${car} : ${this.carPositions[car]} \n`);
      });
      Console.print("\n");
      attempt++;
    }
  }

  getScores() {
    return Object.entries(this.carPositions).map(([car, score]) => [
      car,
      score.length,
    ]);
  }

  determineWinners(carScores) {
    const maxValue = Math.max(...carScores.map(([, score]) => score));
    // 모든 자동차가 시작점에 멈춰있는 경우
    if (maxValue === 0) {
      Console.print(ERROR_MESSAGES.noMovementError);
      throw new Error("[ERROR]");
    }
    // 가장 많이 움직인 자동차들을 filter해서 자동차 이름들만 담은 배열을 반환
    return carScores
      .filter(([, score]) => score === maxValue)
      .map(([car]) => car);
  }
}

export default Race;
