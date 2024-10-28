import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.promptCarNames();
      const forwardTime = await this.promptForwardTime();

      const carPositions = this.runRaceRounds(carNames, forwardTime);
      this.showWinners(carNames, carPositions);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async promptCarNames() {
    const carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = this.splitCarNames(carNameInput);
    this.validateCarNameLength(carNames);
    this.validateNoBlankNames(carNames);
    this.validateUniqueNames(carNames);
    return carNames;
  }

  splitCarNames(carNameInput) {
    return carNameInput.split(",").map(name => name.trim());
  }

  validateCarNameLength(carNames) {
    carNames.forEach(name => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  }

  validateNoBlankNames(carNames) {
    carNames.forEach(name => {
      if (name === '') {
        throw new Error("[ERROR] 자동차 이름은 공백으로 둘 수 없습니다.");
      }
    });
  }
  
  validateForwardTime(forwardTime) {
    if (!Number.isInteger(forwardTime) || forwardTime < 1) {
      throw new Error("[ERROR] 시도할 횟수는 1 이상의 정수여야 합니다.");
    }
  }

  validateUniqueNames(carNames) {
    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }
  
  async promptForwardTime() {
    const forwardTime = Number(await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n"));
    this.validateForwardTime(forwardTime);
    return forwardTime;
  }

  runRaceRounds(carNames, forwardTime) {
    const carPositions = this.initializeCarPositions(carNames);
    Console.print("\n실행 결과");
    for (let i = 0; i < forwardTime; i++) {
      this.advanceRound(carNames, carPositions);
      this.showRoundResults(carNames, carPositions);
    }
    return carPositions;
  }

  initializeCarPositions(carNames) {
    return carNames.reduce((positions, name) => {
      positions[name] = 0;
      return positions;
    }, {});
  }

  advanceRound(carNames, carPositions) {
    carNames.forEach(name => {
      if (this.shouldMoveForward()) {
        carPositions[name] += 1;
      }
    });
  }

  shouldMoveForward() {
    const randomNum = Random.pickNumberInRange(0, 9);
    return randomNum >= 4;
  }

  showRoundResults(carNames, carPositions) {
    carNames.forEach(name => {
      Console.print(`${name} : ${"-".repeat(carPositions[name])}`);
    });
    Console.print(""); // 라운드 구분용 공백 출력
  }

  showWinners(carNames, carPositions) {
    const maxPosition = Math.max(...Object.values(carPositions));
    const winners = carNames.filter(name => carPositions[name] === maxPosition).join(", ");
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;