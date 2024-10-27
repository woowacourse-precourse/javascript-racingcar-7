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
          if (names.some((name) => name === "")) {
            reject(new Error("[ERROR] 자동차 이름은 공백일 수 없습니다."));
          } else {
            resolve(names);
          }
        })
        .catch((error) => reject(error));
    });
  }
}

export default App;
