import { MissionUtils } from "@woowacourse/mission-utils";
const SEPARATOR = ",";

class App {
  async run() {
    let carNamesString = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로)\n"
    );
    if (!carNamesString.includes(SEPARATOR)) {
      throw new Error(
        "[ERROR] 쉼표(,) 구분자가 없습니다. 프로그램을 종료합니다."
      );
    }
    let carNames = carNamesString.split(SEPARATOR);

    if (!this.hasLongCarName(carNames)) {
      throw new Error(
        "[ERROR] 구분자는 있으나, 자동차 이름은 5자 이하만 가능합니다. 프로그램을 종료합니다."
      );
    }

    if (this.hasCarNameStartingWithNumber(carNames)) {
      throw new Error(
        "[ERROR] 자동차 이름은 문자만 가능합니다. 프로그램을 종료합니다."
      );
    }

    let roundCountString = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    if (isNaN(roundCountString)) {
      throw new Error(
        "[ERROR] 숫자가 아닌 값을 입력하셨습니다. 프로그램을 종료합니다."
      );
    }

    let roundCount = Number(roundCountString);
    if (roundCount <= 0) {
      throw new Error(
        "[ERROR] 시도 횟수는 1회 이상이어야 합니다. 프로그램을 종료합니다."
      );
    }

    const carsMap = this.createCarPositionMap(carNames);

    MissionUtils.Console.print("\n실행 결과");

    for (let i = 0; i < roundCount; i++) {
      // roundCount 라운드 만큼,
      this.moveOneStepRandomly(carsMap); // car들 돌며 4이상시 position++하는 함수

      let positionStr;
      this.printOneRound(carsMap, positionStr); // car들 돌며 그 라운드 결과 출력

      MissionUtils.Console.print(""); // 라운드 끝 마다 한줄 띄움
    }
  }

  printOneRound(carsMap, positionStr) {
    for (const car of carsMap) {
      positionStr = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${positionStr}`);
    }
  }

  moveOneStepRandomly(carsMap) {
    for (const car of carsMap) {
      if (MissionUtils.Random.pickNumberInRange(0, 9) > 3) {
        car.position++;
      }
    }
  }

  createCarPositionMap(carNames) {
    return carNames.map((name) => ({ name, position: 0 }));
  }

  hasLongCarName(carNames) {
    for (const carName of carNames) {
      if (carName.length > 5) return false;
    }
    return true;
  }

  hasCarNameStartingWithNumber(carNames) {
    for (const carName of carNames) {
      if (/^\d/.test(carName)) return true;
    }
    return false;
  }
}

export default App;
