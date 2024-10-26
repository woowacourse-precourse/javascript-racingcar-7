import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNames = []; // 자동차 이름 목록
    this.numberOfRounds = 0; // 시도할 횟수
  }

  async run() {
    await this.getCarNames(); // 자동차 이름 요청
    await this.getRounds(); // 시도 횟수 요청
    this.startRace(); // 경주 시작
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = this.validateCarNames(input.split(",")); // 자동차 이름 검증
  }

  validateCarNames(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 자동차 이름은 5자 이하만 가능합니다.`);
      }
    });
    return names; // 유효한 자동차 이름 반환
  }

  async getRounds() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    this.numberOfRounds = this.validateRounds(input); // 시도 횟수 검증
  }

  validateRounds(input) {
    const rounds = Number(input);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error(`[ERROR] 유효한 시도 횟수를 입력하세요.`);
    }
    return rounds; // 유효한 시도 횟수 반환
  }

  moveCars() {
    return this.carNames.map((carName) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      return randomValue >= 4 ? carName : ""; // 4 이상일 경우 자동차 이름 반환
    });
  }
}

export default App;
