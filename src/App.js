import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const userInputCarNames = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const userInputTryCount = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );
    const carNameList = userInputCarNames.split(",");
    for (const carName of carNameList) {
      if (carName.length > 5)
        throw new Error("[Error] 자동차 이름의 길이가 5 이상입니다.");
    }
    const tryCount = +userInputTryCount;
    const carPositions = {};
    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNameList) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
        const isGo = randomNum >= 4;
        if (isGo) {
          // carName에 1 더한다.
          if (carPositions[carName]) {
            carPositions[carName]++;
          } else {
            carPositions[carName] = 1;
          }
        }
      }
    }
  }
}

export default App;
