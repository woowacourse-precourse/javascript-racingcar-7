import { Console, Random } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.carNames = [];
    this.total = 0;
    this.moveForwardCount = {}; // { 차이름:전진횟수 }
    this.winnerOutput = "";
  }

  checkCarNames(inputString) {
    const carNames = inputString.split(",");
    for (const name of carNames) {
      if (name.length > 5) {
        return false;
      }
    }
    return true;
  }

  checkMoveCount(moveCountString) {
    return !isNaN(moveCountString);
  }

  includeSameNames(inputString) {
    const carNames = inputString.split(",");
    const setCarNames = new Set(carNames);
    return carNames.length !== setCarNames.size;
  }

  async inputCarNames() {
    try {
      const names = await Console.readLineAsync(
        `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`
      );

      if (this.checkCarNames(names)) {
        this.carNames = names.split(",");
      } else {
        throw new Error(
          "[ERROR] 쉼표(,)를 구분자로 두어서 각 5자 이하로 입력해야 합니다."
        );
      }
      if (this.includeSameNames(names)) {
        throw new Error("[ERROR] 같은 이름은 입력하실 수 없습니다.");
      }
    } catch (error) {
      throw error;
    }
  }

  async inputMoveCount() {
    try {
      const moveCount = await Console.readLineAsync(
        `시도할 횟수는 몇 회인가요?\n`
      );

      if (this.checkMoveCount(moveCount)) {
        this.total = +moveCount;
      } else {
        throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
      }
    } catch (error) {
      throw error;
    }
  }

  moveForwardStepByStep() {
    for (const name of this.carNames) {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        this.moveForwardCount[name] += 1;
      }
    }
  }

  printStateStepByStep(nth) {
    if (nth === 0) {
      Console.print("");
      Console.print("실행 결과");
    }
    for (const name of this.carNames) {
      const text = "-".repeat(this.moveForwardCount[name]);
      Console.print(`${name} : ${text}`);
    }
    Console.print("");
  }

  moveForward() {
    for (const name of this.carNames) {
      this.moveForwardCount[name] = 0;
    }

    for (let i = 0; i < this.total; i++) {
      this.moveForwardStepByStep();
      this.printStateStepByStep(i);
    }
  }

  decideWinner() {
    const winner = [];
    const maxCount = Math.max(...Object.values(this.moveForwardCount));
    for (const name of this.carNames) {
      if (this.moveForwardCount[name] === maxCount) {
        winner.push(name);
      }
    }
    this.winnerOutput = winner.join(", ");
  }

  printWinner() {
    Console.print(`최종 우승자 : ${this.winnerOutput}`);
  }

  async run() {
    try {
      await this.inputCarNames();
      await this.inputMoveCount();
      this.moveForward();
      this.decideWinner();
      this.printWinner();
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
