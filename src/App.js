import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }
}

class App {
  async run() {
    const carNames = await this.readCarNames();
    this.validateCarNames(carNames);
    const attempts = await this.readAttempts();
    this.validateAttempts(attempts);
    this.playGame(carNames, attempts);
  }

  async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return input.split(",").map((name) => name.trim());
  }

  validateCarNames(carNames) {
    if (carNames.length === 0) {
      throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }
    carNames.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    });
  }

  async readAttempts() {
    const input = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    const attempts = parseInt(input, 10);
    if (isNaN(attempts)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }
    return attempts;
  }

  validateAttempts(attempts) {
    if (attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
    }
  }

  playGame(carNames, attempts) {
    const cars = carNames.map((name) => new Car(name));
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < attempts; i++) {
      cars.forEach((car) => {
        car.move();
      });
      this.printStatus(cars);
    }
    const winners = this.getWinners(cars);
    this.printWinners(winners);
  }

  printStatus(cars) {
    cars.forEach((car) => {
      const progress = "-".repeat(car.position);
      MissionUtils.Console.print(`${car.name} : ${progress}`);
    });
    MissionUtils.Console.print("");
  }
  getWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    return cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }
  printWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
