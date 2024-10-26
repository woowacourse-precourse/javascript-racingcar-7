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
    for (let i = 0; i < roundCount; i++) {
      for (const car of carsMap) {
        if (MissionUtils.Random.pickNumberInRange(0, 9) > 3) {
          car.position++;
        }
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
