import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getUserCarNames();
      const tryCount = await this.getUserTryNumbers();
      const carScores = this.initializeCarScores(carNames);
      Console.print("\n실행 결과");
      this.runRace(carNames, tryCount, carScores);
      const winners = this.findWinners(carScores);
      this.printWinners(winners);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getUserCarNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const input = await Console.readLineAsync("");
    const carNames = input.split(",").map((name) => name.trim());

    this.checkMinCars(carNames);
    this.checkDuplicateNames(carNames);
    this.validCarNameLengthAndBlank(carNames);

    return carNames;
  }

  checkMinCars(carNames) {
    if (carNames.length < 2 || carNames.includes("")) {
      throw new Error("[ERROR] 자동차는 최소 2대 이상이어야 합니다.");
    }
  }

  checkDuplicateNames(carNames) {
    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }
  validCarNameLengthAndBlank(carNames) {
    if (
      carNames.some(
        (name) => name.length > 5 || name.length === 0 || name.includes(" ")
      )
    ) {
      throw new Error(
        "[ERROR] 자동차 이름은 5자 이하만 가능하며, 공백이 불가합니다."
      );
    }
  }
  async getUserTryNumbers() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const input = await Console.readLineAsync("");
    const tryNumber = parseInt(input, 10);

    if (isNaN(tryNumber) || tryNumber <= 0) {
      throw new Error(
        "[ERROR] 시도 횟수는 양수가 아닌 다른 입력값을 받아들일 수 없습니다."
      );
    }

    return tryNumber;
  }
  initializeCarScores(carNames) {
    return carNames.reduce((acc, name) => ({ ...acc, [name]: "" }), {});
  }

  runRace(carNames, tryCount, carScores) {
    for (let i = 0; i < tryCount; i++) {
      this.moveCars(carNames, carScores);
      this.printRoundResults(carScores);
    }
  }

  moveCars(carNames, carScores) {
    carNames.forEach((name) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        carScores[name] += "-";
      }
    });
  }
  printRoundResults(carScores) {
    for (const [car, score] of Object.entries(carScores)) {
      Console.print(`${car} : ${score}`);
    }
    Console.print("");
  }
  findWinners(carScores) {
    const maxScoreLength = Math.max(
      ...Object.values(carScores).map((score) => score.length)
    );
    return Object.keys(carScores).filter(
      (car) => carScores[car].length === maxScoreLength
    );
  }
  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
