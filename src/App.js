import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.getCarNames();
    const times = await this.getTimes();
    const scores = this.setScores(carNames);
    this.playGame(times, carNames, scores);
    const winners = this.getWinners(carNames, scores);
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
    const carNames = input.split(",");
    this.checkDuplicatedCarNames(carNames);
    carNames.forEach((carName) => this.validateCarName(carName));
    return carNames;
  }

  checkDuplicatedCarNames(carNames = []) {
    if (new Set(carNames).size !== carNames.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
  }

  validateCarName(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.");
    }

    if (!/^[a-zA-Z0-9]*$/.test(carName)) {
      throw new Error(
        "[ERROR] 자동차 이름은 영문 또는 숫자 조합만 가능합니다.",
      );
    }
  }

  async getTimes() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const times = Number(input);
    this.validateTimes(times);
    return times;
  }

  validateTimes(times) {
    if (isNaN(times)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 입력하실 수 없습니다.");
    }

    if (times <= 0) {
      throw new Error("[ERROR] 양수만 입력하실 수 있습니다.");
    }
  }

  setScores(carNames) {
    let scores = {};
    carNames.forEach((car) => (scores[car] = 0));
    return scores;
  }

  isMovingForward() {
    const n = Random.pickNumberInRange(0, 9);
    return n >= 4;
  }

  playRound(carNames, scores) {
    carNames.forEach((carName) => {
      if (this.isMovingForward()) {
        scores[carName]++;
      }
    });

    this.showRoundResult(carNames, scores);
  }

  showRoundResult(carNames, scores) {
    carNames.forEach((carName) =>
      Console.print(`${carName} : ${"-".repeat(scores[carName])}`),
    );
    Console.print(" ");
  }

  playGame(times, carNames, scores) {
    Console.print("\n실행결과");
    for (let i = 0; i < times; i++) {
      this.playRound(carNames, scores);
    }
  }

  getWinners(carNames, scores) {
    let highestScore = 0;
    let winners = [];
    carNames.forEach((carName) => {
      if (scores[carName] > highestScore) {
        highestScore = scores[carName];
        winners = [carName];
      } else if (scores[carName] === highestScore) {
        winners.push(carName);
      }
    });
    return winners;
  }
}

export default App;
