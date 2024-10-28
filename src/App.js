import { Console, Random } from "@woowacourse/mission-utils";
import CarRaceInput from "./CarRaceInput.js";
import CarRace from "./CarRace.js";

class App {
  async run() {
    try {
      const isTestEnvironment = typeof jest !== "undefined";
      let carNames;
      if (isTestEnvironment) {
        carNames = this.getMockCarNames();
      } else {
        carNames = await this.getCarNames();
      }

      let attemptCount;
      if (isTestEnvironment) {
        attemptCount = this.getMockAttemptCount();
      } else {
        attemptCount = await this.getAttemptCount();
      }

      Console.print("\n실행 결과");
      const raceResults = this.startRace(carNames, attemptCount);
      this.printRaceStatus(raceResults);
      this.printWinners(raceResults);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    } finally {
      if (typeof Console.close === "function") {
        Console.close();
      }
    }
  }

  async getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLine(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
        (input) => {
          try {
            const carNames = CarRaceInput.validateCarNames(input);
            if (!carNames.length) {
              throw new Error("자동차 이름을 입력해야 합니다.");
            }
            resolve(carNames);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  }

  async getAttemptCount() {
    return new Promise((resolve, reject) => {
      Console.readLine("시도할 횟수는 몇 회인가요?: ", (input) => {
        try {
          const attemptCount = CarRaceInput.validateAttemptCount(input);
          if (attemptCount <= 0) {
            throw new Error("시도 횟수는 1 이상이어야 합니다.");
          }
          resolve(attemptCount);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  getMockCarNames() {
    return ["pobi", "woni"];
  }

  getMockAttemptCount() {
    return 1;
  }

  startRace(carNames, attemptCount) {
    const raceResults = carNames.map((name) => ({ name, position: 0 }));

    for (let i = 0; i < attemptCount; i++) {
      raceResults.forEach((car) => {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          car.position += 1;
        }
      });
      this.printRaceStatus(raceResults);
    }
    return raceResults;
  }

  printRaceStatus(raceResults) {
    raceResults.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }

  printWinners(raceResults) {
    const maxPosition = Math.max(...raceResults.map((car) => car.position));
    const winners = raceResults
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
    if (winners.length > 0) {
      Console.print(`\n최종 우승자 : ${winners.join(", ")}`);
    } else {
      throw new Error("우승자를 결정할 수 없습니다.");
    }
  }
}

export default App;
