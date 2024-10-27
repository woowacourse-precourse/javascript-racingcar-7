import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 전진 여부를 결정하는 함수
  shouldMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4; // 무작위 값이 4 이상일 경우 전진
  }

  // 자동차를 전진시키는 함수
  move() {
    if (this.shouldMove()) {
      this.position += 1;
    }
  }

  // 현재 위치 출력
  showPosition() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attemptCount = await this.getAttemptCount();

      // 각 자동차 인스턴스를 생성하고 전진 여부를 테스트
      const cars = carNames.map((name) => new Car(name));
      for (let i = 0; i < attemptCount; i++) {
        cars.forEach((car) => car.move());
      }

      // 각 자동차의 위치를 출력
      cars.forEach((car) => MissionUtils.Console.print(car.showPosition()));
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  // 자동차 이름 입력
  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = input.split(",").map((name) => name.trim());

    carNames.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다."
        );
      }
    });

    return carNames;
  }

  // 시도 횟수 입력
  async getAttemptCount() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const attemptCount = Number(input);

    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 0보다 큰 숫자여야 합니다.");
    }

    return attemptCount;
  }
}

export default App;
