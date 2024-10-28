import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.askForCarNames();
    const tryCount = await this.askForTryCount();
    const results = this.startRace(carNames, tryCount);
    this.printResults(results);
  }

  async askForCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNames = input
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length <= 5);
    if (carNames.length === 0 || carNames.some((name) => name.length === 0)) {
      throw new Error("[ERROR] 자동차 이름을 올바르게 입력하세요.");
    }
    return carNames;
  }

  async askForTryCount() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const tryCount = parseInt(input, 10);
    if (isNaN(tryCount) || tryCount <= 0) {
      throw new Error("[ERROR] 시도할 횟수를 올바르게 입력하세요.");
    }
    return tryCount;
  }

  startRace(carNames, tryCount) {
    const results = Array.from({ length: tryCount }, () =>
      carNames.map((name) => ({ name, position: 0 }))
    );

    for (let i = 0; i < tryCount; i++) {
      for (const car of results[i]) {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          car.position++;
        }
      }
    }
    return results;
  }

  printResults(results) {
    const lastRound = results[results.length - 1];
    lastRound.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });

    const winners = lastRound.filter(
      (car) => car.position === Math.max(...lastRound.map((c) => c.position))
    );
    MissionUtils.Console.print(
      `최종 우승자 : ${winners.map((winner) => winner.name).join(", ")}`
    );
  }
}

export default App;
