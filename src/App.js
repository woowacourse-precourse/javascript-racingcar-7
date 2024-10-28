import { Console } from "@woowacourse/mission-utils";

class App {
  static async run() {
    await App.getCarNames();
  }

  static getCarNames() {
    return new Promise((resolve, reject) => {
      Console.readLine(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ",
        (input) => {
          try {
            const carNames = App.validateCarNames(input);
            Console.print(`입력된 자동차 이름: ${carNames.join(", ")}`);
            resolve(carNames);
          } catch (error) {
            Console.print(`[ERROR] ${error.message}`);
            reject(error);
          }
        }
      );
    });
  }

  static validateCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    if (carNames.some((name) => name.length === 0 || name.length > 5)) {
      throw new Error("자동차 이름은 1자 이상 5자 이하로 입력해야 합니다.");
    }
    return carNames;
  }
}

App.run();

export default App;
