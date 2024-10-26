import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";
class App {
  parseCarNames(carNames) {
    return carNames.split(",").map((carName) => {
      return { name: carName.trim(), result: "" };
    });
  }

  validateInput(carNames, attempts) {
    if (!carNames.trim()) {
      throw new Error("[ERROR]: 자동차 이름을 입력해주세요.");
    }

    carNames.split(",").forEach((carName) => {
      if (carName.trim().length > 5) {
        throw new Error("[ERROR]: 자동차 이름은 5자 이하만 가능합니다.");
      }
    });

    if (!attempts.trim()) {
      throw new Error("[ERROR]: 시도 횟수를 입력해주세요.");
    }

    if (attempts < 1) {
      throw new Error("[ERROR]: 시도 횟수는 1 이상만 가능합니다.");
    }

    if (isNaN(attempts)) {
      throw new Error("[ERROR]: 시도 횟수는 숫자만 입력 가능합니다.");
    }
  }
  async getCarNameAndAttempts() {
    try {
      const carName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const attempts = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );

      this.validateInput(carName, attempts);

      const cars = this.parseCarNames(carName);
      return { cars, attempts };
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  moveCar(car) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      car.result += "-";
    }
  }

  async run() {
    try {
      const { cars, attemps } = await this.getCarNameAndAttempts();
      for (let i = 0; i < attemps; i++) {
        cars.forEach((car) => this.moveCar(car));
      }
    } catch (error) {
      throw error;
    }
  }
}

export default App;
