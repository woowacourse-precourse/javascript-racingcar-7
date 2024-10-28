import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = []; // 자동차 객체 저장
    this.rounds = 0; // 레이스 횟수
  }

  async run() {
    await this.initGame();
  }

  // 1. 사용자 입력받기
  async initGame() {
    // 자동차 이름 입력받기
    const CAR_NAMES_INPUT = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.cars = this.createCars(CAR_NAMES_INPUT);

    // 시도 횟수 입력받기
    const ROUNDS_INPUT = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.rounds = parseInt(ROUNDS_INPUT);

    if (isNaN(this.rounds) || this.rounds <= 0) {
      throw new Error("[ERROR] 라운드 횟수는 1 이상의 정수만 가능합니다.");
    }
  }

  // 자동차 객체 생성하기
  createCars(input) {
    const CAR_NAMES = input.split(",");
    return CAR_NAMES.map((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해주세요.");
      }
      return { name: name, position: 0 }; // 각 자동차의 초기 위치는 0으로 설정
    });
  }
}

export default App;
