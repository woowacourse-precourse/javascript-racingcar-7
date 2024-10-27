import { Console, Random } from "@woowacourse/mission-utils";

class InputHandler {
  async getInput(message) {
    return await Console.readLineAsync(message);
  }
}

class OutputHandler {
  static printMessage(message) {
    Console.print(message);
  }

  static printRaceStatus(cars) {
    cars.forEach((car) => {
      const position = "-".repeat(car.getPosition());
      Console.print(`${car.getName()} : ${position}`);
    });
    Console.print(""); // 줄바꿈
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

class RandomNumberGenerator {
  static pickNumberInRange(min = 0, max = 9) {
    return Random.pickNumberInRange(min, max);
  }
}

class InputValidator {
  static validateCarNames(carNames) {
    if (carNames.some(name => !name || name.trim() === "")) {
      throw new Error("[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.");
    }

    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }

  static validateAttempts(input) {
    const attempts = parseInt(input, 10);
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.");
    }
    return attempts;
  }
}

class PlayingCar {
  constructor(name) {
    this.name = name;
    this.position = 0; // 초기 위치
  }

  move() {
    const randomNumber = RandomNumberGenerator.pickNumberInRange();
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.cars = [];
  }

  async run() {
    try {
      const input = await this.inputHandler.getInput(
          "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)"
      );
      const carNames = input.split(",").map((name) => name.trim());

      InputValidator.validateCarNames(carNames);
      this.createCars(carNames);

      const attemptsInput = await this.inputHandler.getInput("시도할 횟수는 몇 회인가요?");
      const attempts = InputValidator.validateAttempts(attemptsInput);
      this.raceCars(attempts);

      this.printWinners();
    } catch (error) {
      OutputHandler.printMessage(error.message);
      throw error;
    }
  }

  createCars(carNames) {
    this.cars = carNames.map((name) => new PlayingCar(name));
  }

  raceCars(attempts) {
    for (let i = 0; i < attempts; i++) {
      this.cars.forEach((car) => car.move());
      OutputHandler.printRaceStatus(this.cars);
    }
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
        .filter((car) => car.getPosition() === maxPosition)
        .map((car) => car.getName());

    OutputHandler.printWinners(winners);
  }
}

export default App;