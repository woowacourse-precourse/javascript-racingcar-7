import { Console, Random } from "@woowacourse/mission-utils";

// 자동차 클래스 정의
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 전진 : 난수가 4 이상일 경우 위치를 1 증가시킴
  forwardMove() {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }
}

class App {
  async run() {
    // 자동차 문자열 입력
    const inputCarNames = await Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n`
    );

    // 입력받은 문자열을 "," 기준으로 나누고 양쪽 공백 제거
    const carNamesArray = inputCarNames
      .split(",")
      .map((carName) => carName.trim());

    // 공백 문자열이나 빈 문자열 예외 처리
    const gapInvalidName = carNamesArray.some((carName) => carName === "");
    if (gapInvalidName) {
      throw new Error(
        "[ERROR] 자동차 이름에 빈 문자열 또는 공백을 입력할 수 없습니다."
      );
    }

    // 자동차 이름 5자 초과일 경우 예외 발생
    const invalidName = carNamesArray.find((carName) => carName.length > 5);
    if (invalidName) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하로 작성해야 합니다.");
    }

    // 중복된 자동차 이름 예외 처리
    const uniqueNames = new Set(carNamesArray);
    if (uniqueNames.size !== carNamesArray.length) {
      throw new Error("[ERROR] 중복된 자동차 이름은 입력할 수 없습니다.");
    }

    // 자동차 객체 배열 생성
    const cars = carNamesArray.map((name) => new Car(name));

    // 이동 횟수 입력
    const moveCount = await Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?\n`
    );

    // 이동 횟수 유효성 검사
    if (!this.isValidNumber(moveCount)) {
      throw new Error("[ERROR] 이동 횟수를 정확히 입력해주세요");
    }

    // 이동 횟수만큼 각 자동차의 전진 시도 및 결과 출력
    for (let i = 0; i < Number(moveCount); i++) {
      this.moveCarsAndPrint(cars);
    }
  }

  // 유효성 검사 함수
  isValidNumber(input) {
    const number = Number(input);
    return Number.isInteger(number) && number > 0;
  }

  // 각 이동 단계마다 전진 시도 후 결과 출력
  moveCarsAndPrint(cars) {
    cars.forEach((car) => {
      car.forwardMove();
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("");
  }
}

export default App;
