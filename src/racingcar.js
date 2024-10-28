import { Random, Console } from "@woowacourse/mission-utils";

class Racingcar {
  constructor() {
    this.carNames = [];
    this.trialCount = 0;
    this.raceResults = [];
  }

  async askForInput() {
    try {
      await this.getCarNames();
      await this.getTrialCount();
      Console.print("\n실행 결과");
      this.runRace();
      this.printWinners();
    } catch (error) {
      Console.print("[ERROR]");
      throw error;
    }
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    this.carNames = carNamesInput.split(",").map((name) => name.trim());
    this.validateCarNames();
    Console.print(`${this.carNames.join(", ")}`);
    this.raceResults = this.carNames.map(() => "");
  }

  validateCarNames() {
    for (const name of this.carNames) {
      if (name.length > 5) {
        Console.print(
          `[ERROR] 자동차 이름은 최대 5글자까지 가능합니다: "${name}"`
        );
        throw new Error("[ERROR]");
      }
    }
  }

  async getTrialCount() {
    const trialInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    this.trialCount = parseInt(trialInput, 10);
    Console.print(`${this.trialCount}`);
  }

  runRace() {
    const racing = new Racing();
    for (let round = 0; round < this.trialCount; round++) {
      this.runSingleTrial(racing);
      Console.print("");
    }
  }

  runSingleTrial(racing) {
    this.carNames.forEach((_, i) => {
      if (racing.RacingrandomNumber()) {
        this.raceResults[i] += "-";
      }
    });
    this.printTrialResult();
  }

  printTrialResult() {
    this.carNames.forEach((name, i) => {
      Console.print(`${name} : ${this.raceResults[i]}`);
    });
  }

  printWinners() {
    const maxLength = Math.max(
      ...this.raceResults.map((result) => result.length)
    );
    const winners = this.carNames.filter(
      (_, i) => this.raceResults[i].length === maxLength
    );
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

class Racing {
  RacingrandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }
}

async function run() {
  const racingcar = new Racingcar();
  await racingcar.askForInput();
}

export { run };
