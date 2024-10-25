import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = this.validateCarNames(carNamesInput);
    const raceRoundsInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const rounds = this.validateRaceRounds(raceRoundsInput);
  }

  validateCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    if (carNames.some((name) => name.length === 0 || name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름이 5자 이하가 아님");
    }
    return carNames;
  }

  validateRaceRounds(input) {
    const rounds = parseInt(input, 10);
    if (rounds <= 0) {
      throw new Error("[ERROR] 시도횟수가 양의 정수가 아님");
    }
    return rounds;
  }
}

export default App;
