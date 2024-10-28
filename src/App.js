import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const raceCars = await this.getRaceCars();
    const attemptCount = await this.getAttemptCount();

    Console.print("\n실행 결과");

    this.startRace(raceCars, attemptCount);
    this.printFinalResult(raceCars);
  }

  async getRaceCars() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름(이름은 쉽표(,) 기준으로 구분)\n"
    );
    this.validateCarNames(inputCarNames);

    const carNames = inputCarNames.split(",");
    return this.createRaceCars(carNames);
  }

  createRaceCars(carNames) {
    const raceCars = [];

    carNames.forEach((carName) => {
      this.validateCarNameDuplicate(raceCars, carName);
      this.validateCarNameLength(carName);
      raceCars.push({ name: carName, location: "" });
    });
    return raceCars;
  }

  async getAttemptCount() {
    const inputNum = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.validateAttemptCount(inputNum);
    return inputNum;
  }

  startRace(raceCars, attemptCount) {
    for (let i = 0; i < attemptCount; i++) {
      this.race(raceCars);
      this.printRoundResult(raceCars);
    }
  }

  race(raceCars) {
    raceCars.forEach((raceCar) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        raceCar.location += "-";
      }
    });
  }

  printRoundResult(raceCars) {
    raceCars.forEach((raceCar) => {
      Console.print(raceCar.name + " : " + raceCar.location);
    });
    Console.print("");
  }

  printFinalResult(raceCars) {
    const maxLength = Math.max(
      ...raceCars.map((raceCar) => raceCar.location.length)
    );

    const longestRaceCars = raceCars.filter(
      (raceCar) => raceCar.location.length === maxLength
    );

    const winners = longestRaceCars.map((raceCar) => raceCar.name).join(", ");

    Console.print("최종 우승자 : " + winners);
  }

  validateCarNames(inputCarNames) {
    if (inputCarNames === "") {
      throw new Error("[ERROR]: 빈 문자열은 입력할 수 없습니다.");
    }
  }

  validateCarNameDuplicate(raceCars, carName) {
    if (raceCars.some((car) => car.name === carName)) {
      throw new Error("[ERROR]: 같은 이름은 불가능합니다.");
    }
  }

  validateCarNameLength(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR]: 이름은 5자 이하만 가능합니다.");
    }
  }

  validateAttemptCount(inputNum) {
    if (isNaN(inputNum)) {
      throw new Error("[ERROR]: 숫자만 입력 가능합니다.");
    }
    if (inputNum == 0) {
      throw new Error("[ERROR]: 0은 입력할 수 없습니다.");
    }
  }
}

export default App;
