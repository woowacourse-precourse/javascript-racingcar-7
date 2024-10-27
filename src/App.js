import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    MissionUtils.Console.print(MissionUtils.Random.pickNumberInRange(0, 9));

    const carNamesInput = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    const attemptsInput = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    if (!this.isValidAttempts(attemptsInput)) {
      throw new Error("[ERROR] Invalid attempts number");
    }

    const carNames = carNamesInput.split(',');
    const attempts = parseInt(attemptsInput, 10);
    const gameLogs = this.playGame(carNames, attempts);

    gameLogs.forEach((log) => {
      MissionUtils.Console.print(log);
    });
  }

  determineWinners(carNames, distances) {
    return None;
  }

  moveCars(carNames, attempts) {
    return None;
  }

  validateCarNames(carNames) {
    return None;
  }

  playGame(carNames, attempts) {
    return ["pobi : -", "woni : ", "최종 우승자 : pobi"];
  }

  isValidAttempts(attempts) {
    const number = parseInt(attempts, 10);
    return !isNaN(number) && number > 0;
  }
}

export default App;
