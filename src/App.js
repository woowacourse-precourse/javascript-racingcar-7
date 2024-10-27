import { Console } from "@woowacourse/mission-utils";

class App {
  parseCarNames(userCarNames) {
    const carNames = userCarNames.split(",").filter((car) => car.trim() !== "");
    if (carNames.length < 2) {
      throw new Error("[ERROR] 자동차 이름을 두개 이상 입력해주세요");
    }
    return carNames;
  }
  async readCarNames() {
    let userCarNames = "";
    while (!userCarNames.trim()) {
      userCarNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
    }
    const parsedCarNames = this.parseCarNames(userCarNames);

    // parsedCarNames.forEach((el) => {
    //   if (el.length > 5) {
    //     throw new Error("[ERROR] 자동차 이름은 5자 이하로 입력해주세요");
    //   }
    // });
    return parsedCarNames;
  }

  async run() {
    const output = await this.readCarNames();
    Console.print(output);
  }
}

export default App;
