import { Console, Random } from "@woowacourse/mission-utils";


// input 을 받는 클래스 정의
class InputHandler {
  async getInput(message) {
    return await Console.readLineAsync(message);
  }

  printMessage(message) {
    Console.print(message);
  }
}

// 각 자동차의 랜덤 넘버
class RandomNumberGenerator {
  static pickNumberInRange(min = 0, max = 9) {
    return Random.pickNumberInRange(min, max);
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

      const attemptsInput = await this.inputHandler.getInput("시도할 횟수는 몇 회인가요?");
      const attempts = this.parseAttempts(attemptsInput); // 시도 횟수 검증

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

}

export default App;