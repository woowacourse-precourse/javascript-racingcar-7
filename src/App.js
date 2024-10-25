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

    if (!hasLongCarName(carNames)) {
      throw new Error(
        "[ERROR] 구분자는 있으나, 자동차 이름은 5자 이하만 가능합니다. 프로그램을 종료합니다."
      );
    }

    if (hasCarNameStartingWithNumber(carNames)) {
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
    if (roundCount < 0) {
      throw new Error("[ERROR] 음수를 입력하셨습니다. 프로그램을 종료합니다.");
    }
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
