import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (this.canMove()) {
      this.position++;
    }
  }

  canMove() {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }

  getDisplay() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

class RacingGame {
  static MINIMUM_TRY_COUNT = 1;
  static MAX_CAR_NAME_LENGTH = 5;

  constructor(carNames, tryCount) {
    this.validateCarNames(carNames);
    this.validateTryCount(tryCount);

    this.cars = this.createCars(carNames);
    this.tryCount = tryCount;
  }

  validateCarNames(carNames) {
    if (carNames.length === 0) {
      throw new Error("[ERROR] 자동차 이름은 1개 이상이어야 합니다.");
    }

    carNames.forEach((name) => {
      if (name.length > RacingGame.MAX_CAR_NAME_LENGTH) {
        throw new Error("[ERROR] 자동차 이름을 5자 이하로 작성해주세요.");
      }
    });
  }

  validateTryCount(tryCount) {
    if (isNaN(tryCount) || tryCount < RacingGame.MINIMUM_TRY_COUNT) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
    }
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  play() {
    Console.print("\n실행 결과");

    for (let i = 0; i < this.tryCount; i++) {
      this.moveAllCars();
      this.displayRaceStatus();
      Console.print("");
    }

    this.announceWinners();
  }

  moveAllCars() {
    this.cars.forEach((car) => car.move());
  }

  displayRaceStatus() {
    this.cars.forEach((car) => {
      Console.print(car.getDisplay());
    });
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    return this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);
  }

  announceWinners() {
    const winners = this.getWinners().join(", ");
    Console.print(`최종 우승자 : ${winners}`);
  }
}

class App {
  async run() {
    const carNames = await this.getCarNames();
    const tryCount = await this.getTryCount();

    const game = new RacingGame(carNames, tryCount);
    game.play();
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return input
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);
  }

  async getTryCount() {
    const input = await Console.readLineAsync("시도할 횟수는 몇회인가요?\n");
    return parseInt(input, 10);
  }
}

export default App;
