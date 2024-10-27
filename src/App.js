import { Console, Random } from "@woowacourse/mission-utils";

class App {
  carObject = {};

  static ERROR_MESSAGES = {
    EMPTY_STRING: "빈 문자열은 입력할 수 없습니다.",
    DUPLICATE_STRING: "중복된 자동차 이름은 입력할 수 없습니다.",
    MAX_STRING: "자동차이름은 5자 이하만 가능합니다.",
    INVALID_NUMBER: "양의 정수만 입력 가능합니다.",
  };

  async run() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const numberInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    this.validateCarInput(carInput);
    this.initializeCars(carInput);

    this.validateNumberInput(numberInput);
    this.racingRound(numberInput);
    this.selectWinner();
  }

  // carInput을 받아서 carObject에 value를 0 초기화하는 함수
  initializeCars(carInput) {
    const carNames = carInput.split(",").map((name) => name.trim());

    carNames.forEach((carName) => {
      this.carObject[carName] = 0;
    });
  }

  //numberInput 바탕으로 레이싱을 시작하는 함수
  racingRound(numberInput) {
    Console.print(`\n실행 결과`);
    for (let i = 0; i < numberInput; i++) {
      this.simulateRaceRound();
      this.printRaceRound();
    }
  }

  // 라운드별 진행상황 처리 함수
  simulateRaceRound() {
    Object.keys(this.carObject).forEach((carName) => {
      if (this.moveOrStop()) this.carObject[carName]++;
    });
  }
  //전진 or 멈춤 판단 함수
  moveOrStop() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  // 라운드별 진행상황 출력 함수
  printRaceRound() {
    Object.entries(this.carObject).forEach(([carName, distance]) => {
      Console.print(`${carName} : ${"-".repeat(distance)}`);
    });
    Console.print("\n");
  }

  //최종 우승자 판별 함수
  selectWinner() {
    const maxDistance = Math.max(...Object.values(this.carObject));
    const winners = Object.keys(this.carObject).filter(
      (carName) => this.carObject[carName] === maxDistance
    );
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  // 자동차 이름 입력 검증 함수
  validateCarInput(carInput) {
    // 빈값 입력 검증
    if (!carInput.trim()) this.throwError(App.ERROR_MESSAGES.EMPTY_STRING);

    // 자동차 이름 5자 이하 검증
    if (carInput.split(",").some((carName) => carName.trim().length > 5))
      this.throwError(App.ERROR_MESSAGES.MAX_STRING);

    // 자동차 이름 중복 검증
    if (new Set(carInput.split(",")).size !== carInput.split(",").length) {
      this.throwError(App.ERROR_MESSAGES.DUPLICATE_STRING);
    }
  }

  // 횟수 입력 검증 함수
  validateNumberInput(numberInput) {
    if (!numberInput || !numberInput.trim())
      this.throwError(App.ERROR_MESSAGES.EMPTY_STRING);

    // 정규식을 사용해 양의 정수만 허용
    if (!/^[1-9]\d*$/.test(numberInput))
      this.throwError(App.ERROR_MESSAGES.INVALID_NUMBER);
  }

  // 공통 에러 처리 함수
  throwError(message) {
    throw new Error(`[ERROR] ${message}`);
  }
}

export default App;
