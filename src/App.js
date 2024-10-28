import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attemptCount = await this.getAttemptCount();
      Console.print(
        `자동차 이름: ${carNames.join(", ")} | 시도 횟수: ${attemptCount}`
      );
      const raceResults = this.startRace(carNames, attemptCount);
      this.printRaceStatus(raceResults);
      this.printWinners(raceResults);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    } finally {
      Console.close();
    }
  }

  getCarNames() {
    return new Promise((resolve) => {
      Console.readLine(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
        (input) => {
          try {
            const carNames = this.validateCarNames(input);
            resolve(carNames);
          } catch (error) {
            Console.print(`[ERROR] ${error.message}`);
            resolve(this.getCarNames()); // 오류 시 재입력 받기
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
    return new Promise((resolve) => {
      Console.readLine("시도할 횟수는 몇 회인가요?: ", (input) => {
        try {
          const attemptCount = this.validateAttemptCount(input);
          resolve(attemptCount);
        } catch (error) {
          Console.print(`[ERROR] ${error.message}`);
          resolve(this.getAttemptCount()); // 오류 시 재입력 받기
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
    }
    return results;
  }

  printRaceStatus(results) {
    const raceStatus = results
      .map((car) => `${car.name}: ${"-".repeat(car.position)}`)
      .join("\n");
    Console.print(raceStatus);
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
