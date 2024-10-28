import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = []; // 자동차 객체 저장
    this.rounds = 0; // 레이스 횟수
  }

  async run() {
    try {
      await this.initGame();
      this.playRounds();
      this.printWinners();
    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error;
    }
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

    // 숫자 형식 검사 (1 이상의 정수만 허용)
    if (!/^[1-9]\d*$/.test(ROUNDS_INPUT)) {
      throw new Error("[ERROR] 라운드 횟수는 1 이상의 정수만 가능합니다.");
    }

    this.rounds = parseFloat(ROUNDS_INPUT);

    if (
      isNaN(this.rounds) ||
      this.rounds <= 0 ||
      !Number.isInteger(this.rounds)
    ) {
      throw new Error("[ERROR] 라운드 횟수는 1 이상의 정수만 가능합니다.");
    }
  }

  // 자동차 객체 생성하기
  createCars(input) {
    const CAR_NAMES = input.split(",");
    const USED_NAMES = new Set(); // 이름 중복 검사용

    return CAR_NAMES.map((name) => {
      name = name.trim();

      if (name.length === 0 || name.length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하로 작성해주세요."
        );
      }

      if (USED_NAMES.has(name)) {
        throw new Error(`[ERROR] 중복된 자동차 이름이 있습니다. : ${name}`);
      }
      USED_NAMES.add(name);

      return { name: name, position: 0 }; // 각 자동차의 초기 위치는 0으로 설정
    });
  }

  // 2. 게임 시작하기
  playRounds() {
    MissionUtils.Console.print("\n실행결과");
    for (let i = 0; i < this.rounds; i++) {
      this.cars.forEach((car) => {
        const RANDOM_VALUE = MissionUtils.Random.pickNumberInRange(0, 9);

        if (RANDOM_VALUE >= 4) {
          // 랜덤 값이 4 이상일 경우에만 움직이기
          car.position++;
        }
      });
      this.printRoundResult();
    }
  }

  // 3. 각 라운드별 결과 출력하기
  printRoundResult() {
    this.cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    MissionUtils.Console.print("");
  }

  // 4. 최종 우승자 출력하기
  printWinners() {
    const MAX_POSITION = Math.max(...this.cars.map((car) => car.position));
    const WINNERS = this.cars
      .filter((car) => car.position === MAX_POSITION)
      .map((car) => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${WINNERS.join(", ")}`);
  }
}

export default App;
