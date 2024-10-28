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
}

export default App;
