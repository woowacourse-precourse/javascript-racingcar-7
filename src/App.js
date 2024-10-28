import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attemptCount = await this.getAttemptCount();
      const results = this.startRace(carNames, attemptCount);
      this.displayRaceResults(results);
      this.displayWinner(results);
    } catch (error) {
      Console.print(error);
    }
  }

  async getCarNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const input = await Console.readLineAsync();
    const carNames = input.split(",").map((name) => name.trim());

    this.validateCarNames(carNames);
    return carNames;
  }

  validateCarNames(carNames) {
    const nameSet = new Set();
    for (const name of carNames) {
      if (!name) {
        throw "[ERROR] 이름이 공백입니다.";
      }
      if (name.length > 5) {
        throw "[ERROR] 이름은 5자 이하로 입력해야 합니다.";
      }
      if (nameSet.has(name)) {
        throw "[ERROR] 중복된 이름이 있습니다.";
      }
      nameSet.add(name);
    }
  }

  async getAttemptCount() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const input = await Console.readLineAsync();
    const attemptCount = Number(input);

    if (isNaN(attemptCount) || attemptCount < 1 || attemptCount > 9) {
      throw "[ERROR] 1~9 사이의 숫자를 입력해야 합니다.";
    }

    return attemptCount;
  }

  startRace(carNames, attemptCount) {
    const results = Array.from({ length: attemptCount }, () => ({
      names: carNames,
      distances: Array(carNames.length).fill(0),
    }));

    for (let i = 0; i < attemptCount; i++) {
      for (let j = 0; j < carNames.length; j++) {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          results[i].distances[j] += 1;
        }
      }
    }
    return results;
  }

  displayRaceResults(results) {
    results.forEach((result, index) => {
      Console.print(`\n[Attempt ${index + 1}]`);
      const output = result.names
        .map((name, i) => `${name} : ${"-".repeat(result.distances[i])}`)
        .join("\n");
      Console.print(output);
    });
  }
}

export default App;
