import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.getCarNames();
    const attemptCount = await this.getAttemptCount();
    Console.print(
      `자동차 이름: ${carNames.join(", ")} | 시도 횟수: ${attemptCount}`
    );
    this.startRace(carNames, attemptCount);
  }

  getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLine(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
        (input) => {
          try {
            const carNames = this.validateCarNames(input);
            Console.print(`입력된 자동차 이름: ${carNames.join(", ")}`);
            resolve(carNames);
          } catch (error) {
            Console.print(`[ERROR] ${error.message}`);
            reject(error);
          }
        }
      );
    });
  }

  validateCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    if (carNames.some((name) => name.length === 0 || name.length > 5)) {
      throw new Error("자동차 이름은 1자 이상 5자 이하로 입력해야 합니다.");
    }
    return carNames;
  }

  getAttemptCount() {
    return new Promise((resolve, reject) => {
      Console.readLine("시도할 횟수는 몇 회인가요?: ", (input) => {
        try {
          const attemptCount = this.validateAttemptCount(input);
          Console.print(`입력된 시도 횟수: ${attemptCount}`);
          resolve(attemptCount);
        } catch (error) {
          Console.print(`[ERROR] ${error.message}`);
          reject(error);
        }
      });
    });
  }

  validateAttemptCount(input) {
    const attemptCount = parseInt(input, 10);
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error("시도 횟수는 1 이상의 숫자여야 합니다.");
    }
    return attemptCount;
  }

  startRace(carNames, attemptCount) {
    const results = carNames.map((name) => ({ name, position: 0 }));
    for (let i = 0; i < attemptCount; i++) {
      results.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.position++;
        }
      });
      this.printRaceStatus(results);
    }
    this.printWinners(results);
  }

  printRaceStatus(results) {
    results.forEach((car) => {
      Console.print(`${car.name}: ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }

  printWinners(results) {
    const maxPosition = Math.max(...results.map((car) => car.position));
    const winners = results
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default App;
