import { Console, Random } from "@woowacourse/mission-utils";


class InputHandler {
  async getInput(message) {
    return await Console.readLineAsync(message);
  }

  printMessage(message) {
    Console.print(message);
  }
}

class RandomNumberGenerator {
  static pickNumberInRange(min = 0, max = 9) {
    return Random.pickNumberInRange(min, max);
  }
}

class PlayingCar {
  constructor(name) {
    if (!name || name.trim() === "") {
      throw new Error("[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.");
    }
    this.name = name;
    this.position = 0;
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

      this.validateCarNames(carNames); // 자동차 이름 검증
      this.createCars(carNames);

      const attemptsInput = await this.inputHandler.getInput("시도할 횟수는 몇 회인가요?");
      const attempts = this.parseAttempts(attemptsInput); // 시도 횟수 검증
      this.raceCars(attempts);

      this.printWinners();
    } catch (error) {
      Console.print(error.message);
      throw error; // 예외를 다시 던져 테스트에서 감지 가능하게 함
    }
  }

  validateCarNames(carNames) {
    const uniqueNames = new Set();
    carNames.forEach((name) => {
      if (uniqueNames.has(name)) {
        throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
      }
      uniqueNames.add(name);
    });
  }

  parseAttempts(input) {
    const attempts = parseInt(input, 10);
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.");
    }
    return attempts;
  }

  createCars(carNames) {
    this.cars = carNames.map((name) => new PlayingCar(name));
  }

  raceCars(attempts) {
    for (let i = 0; i < attempts; i++) {
      this.cars.forEach((car) => car.move());
      this.printRaceStatus();
    }
  }

  printRaceStatus() {
    this.cars.forEach((car) => {
      const position = "-".repeat(car.getPosition());
      this.inputHandler.printMessage(`${car.getName()} : ${position}`);
    });
    this.inputHandler.printMessage(""); // 줄바꿈
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars
        .filter((car) => car.getPosition() === maxPosition)
        .map((car) => car.getName());

    this.inputHandler.printMessage(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;