import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const racingCarNames = await this.readRacingCarNames();
    const attemptCount = await this.readAttemptCount();
    const racingCarNamesArray = this.parseRacingCarNames(racingCarNames);
    const randomNumber = this.getRandomNumber();
  }

  async readRacingCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return input;
  }

  async readAttemptCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return input;
  }

  parseRacingCarNames(racingCarNames) {
    return racingCarNames.split(",");
  }

  getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  moveCar() {
    const randomNumber = this.getRandomNumber();
    if (randomNumber >= 4) {
      return true;
    }
    return false;
  }
}

export default App;
