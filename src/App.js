import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const forwardTime = await this.getForwardTime();

      const carPositions = this.moveCarsByRounds(carNames, forwardTime);
      this.displayWinners(carNames, carPositions);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getCarNames() {
    const carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = this.separateCarNames(carNameInput); // 이름 분리
    this.validateCarNameLength(carNames); // 길이 검증
    return carNames;
  }

  separateCarNames(carNameInput) {
    return carNameInput.split(",").map(name => name.trim());
  }

  validateCarNameLength(carNames) {
    carNames.forEach(name => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  }

  async getForwardTime() {
    const forwardTime = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return Number(forwardTime);
  }

  moveCarsByRounds(carNames, forwardTime) {
    const carPositions = this.initializePositions(carNames);
    Console.print("\n실행 결과");
    for (let i = 0; i < forwardTime; i++) {
      this.playRound(carNames, carPositions);
      this.displayRoundResults(carNames, carPositions);
    }
    return carPositions;
  }

  initializePositions(carNames) {
    return carNames.reduce((positions, name) => {
      positions[name] = 0;
      return positions;
    }, {});
  }

  playRound(carNames, carPositions) {
    carNames.forEach(name => {
      if (this.shouldMove()) {
        carPositions[name] += 1;
      }
    });
  }

  shouldMove() {
    const randomNum = Random.pickNumberInRange(0, 9);
    return randomNum >= 4;
  }

  displayRoundResults(carNames, carPositions) {
    carNames.forEach(name => {
      Console.print(`${name} : ${"-".repeat(carPositions[name])}`);
    });
    Console.print(""); // 라운드 구분용 공백 출력
  }

  displayWinners(carNames, carPositions) {
    const maxPosition = Math.max(...Object.values(carPositions));
    const winners = carNames.filter(name => carPositions[name] === maxPosition).join(", ");
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
