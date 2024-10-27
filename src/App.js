import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getPositionDisplay() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

class RacingGame {
  constructor(carNames, attemptCount) {
    this.cars = carNames.map((name) => new Car(name));
    this.attemptCount = attemptCount;
  }

  play() {
    for (let i = 0; i < this.attemptCount; i++) {
      this.cars.forEach((car) => car.move());
      this.displayCurrentStatus();
    }
  }

  displayCurrentStatus() {
    this.cars.forEach((car) => Console.print(car.getPositionDisplay()));
    Console.print(""); // 줄바꿈
  }
}

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const attemptCount = await this.getAttemptCount();
      Console.print(carNames);
      Console.print(attemptCount);
      const game = new RacingGame(carNames, attemptCount);
      Console.print("실행 결과");
      game.play();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const names = input.split(",").map((name) => name.trim());
    this.validateCarNames(names);
    return names;
  }

  async getAttemptCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attemptCount = Number(input);
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
    return attemptCount;
  }

  validateCarNames(names) {
    if (names.some((name) => name.length > 5 || name.length === 0)) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.");
    }
  }
}

export default App;
