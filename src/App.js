import { Console } from "@woowacourse/mission-utils";
import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.getCarNames();
    this.checkCarNameLength(carNames);
    const attemptCount = await this.getAttemptCount();
    this.initializeCars(carNames);
    await this.startRace(attemptCount);
    this.declareWinners();
  }

  async getCarNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const inputName = await Console.readLineAsync("");
    return this.splitCarNames(inputName);
  }

  splitCarNames(inputName) {
    return inputName
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);
  }

  checkCarNameLength(carNames) {
    const lengthExceeded = carNames.filter((name) => name.length > 5);
    if (lengthExceeded.length > 0) {
      throw new Error(
        `[ERROR] : 자동차 이름은 5자 이하만 가능합니다: ${lengthExceeded.join(
          ", "
        )}`
      );
    }
  }

  async getAttemptCount() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const inputraceDistance = await Console.readLineAsync("");

    const attempInt = parseInt(inputraceDistance);
    if (isNaN(attempInt) || attempInt <= 0) {
      throw new Error("[ERROR] : 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
    return attempInt;
  }

  constructor() {
    this.cars = [];
  }

  initializeCars(carNames) {
    this.cars = carNames.map((name) => ({ name, raceDistance: 0 }));
  }

  async startRace(attemptCount) {
    Console.print("\n실행결과");
    for (let i = 0; i < attemptCount; i++) {
      this.moveCars();
      this.printCurrentRoundResults();
    }
  }

  moveCars() {
    this.cars.forEach((car) => {
      const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        car.raceDistance += 1;
      }
    });
  }

  printCurrentRoundResults() {
    this.cars.forEach((car) => {
      const progress = "-".repeat(car.raceDistance);
      Console.print(`${car.name} : ${progress}`);
    });
    Console.print("");
  }

  declareWinners() {
    const winners = [];
    let maxDistance = -1;

    this.cars.forEach((car) => {
      if (car.raceDistance > maxDistance) {
        maxDistance = car.raceDistance;
        winners.length = 0;
        winners.push(car.name);
      } else if (car.raceDistance === maxDistance) {
        winners.push(car.name);
      }
    });

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
