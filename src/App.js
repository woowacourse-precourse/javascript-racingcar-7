import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNames = []; // 자동차 이름 목록
    this.numberOfRounds = 0; // 시도할 횟수
    this.roundResults = []; // 각 라운드의 결과
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

  startRace() {
    for (let roundIndex = 0; roundIndex < this.numberOfRounds; roundIndex++) {
      const currentRoundResults = this.moveCars(); // 자동차 이동 결과
      this.roundResults.push(currentRoundResults);
      this.printRoundResults(roundIndex); // 라운드 결과 출력
    }
  }

  moveCars() {
    return this.carNames.map((carName) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      return randomValue >= 4 ? carName : ""; // 4 이상일 경우 자동차 이름 반환
    });
  }

  printRoundResults(roundIndex) {
    this.carNames.forEach((carName) => {
      const totalDistance = this.roundResults
        .flat()
        .filter((name) => name === carName).length; // 누적 거리 계산
      const result = "-".repeat(totalDistance);
      Console.print(`${carName} : ${result}`); // 라운드 결과 출력
    });
  }
}

export default App;
