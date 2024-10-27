import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      Console.print(`입력된 자동차들: ${carNames.join(", ")}`);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
        .then((input) => {
          const names = input.split(",").map((name) => name.trim());
          try {
            this.validateCarNames(names);
            resolve(names);
          } catch (error) {
            reject(error);
          }
        })
        .catch((error) => reject(error));
    });
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
}

export default App;
