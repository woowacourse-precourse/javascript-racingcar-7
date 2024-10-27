import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const moveAttempts = await this.getMoveAttempts();
      Console.print("\n실행 결과");

      this.race(carNames, moveAttempts);

      const winners = this.determineWinners(carNames);
      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  async getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
        .then((input) => {
          try {
            const names = this.parseCarNames(input);
            this.validateCarNames(names);
            resolve(names);
          } catch (error) {
            reject(error);
          }
        })
        .catch((error) => reject(error));
    });
  }

  parseCarNames(input) {
    return input.split(",").map((name) => name.trim());
  }

  validateCarNames(names) {
    if (names.some((name) => name === "")) {
      throw new Error("[ERROR] 자동차 이름은 공백일 수 없습니다.");
    }

    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(
          "[ERROR] 자동차 이름은 1자 이상 5자 이하로 입력해야 합니다."
        );
      }
    });

    if (new Set(names).size !== names.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }

  async getMoveAttempts() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
        .then((input) => {
          try {
            const attempts = this.parseMoveAttempts(input);
            resolve(attempts);
          } catch (error) {
            reject(error);
          }
        })
        .catch((error) => reject(error));
    });
  }

  parseMoveAttempts(input) {
    const attempts = parseInt(input, 10);
    if (isNaN(attempts) || attempts <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1 이상의 양의 정수여야 합니다.");
    }
    return attempts;
  }

  race(carNames, moveAttempts) {
    const results = carNames.map(() => "");

    for (let i = 0; i < moveAttempts; i++) {
      carNames.forEach((_, index) => {
        const randomValue = Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          results[index] += "-";
        }
      });

      results.forEach((result, index) => {
        Console.print(`${carNames[index]} : ${result}`);
      });
      Console.print("");
    }

    return results;
  }

  determineWinners(carNames) {
    const results = carNames.map(() => "");

    const maxDistance = Math.max(...results.map((result) => result.length));
    return carNames.filter((_, index) => results[index].length === maxDistance);
  }
}

export default App;
