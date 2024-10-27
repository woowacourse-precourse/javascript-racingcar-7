import { Console } from "@woowacourse/mission-utils";

class App {
  async parseCarNames(userCarNames) {
    return userCarNames.split(",");
  }
  async readCarNames() {
    const userCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    if (!userCarNames.includes(",")) {
      throw new Error("[ERROR] 자동차 이름을 두개 이상 입력해주세요");
    }
    const parsedCarNames = this.parseCarNames(userCarNames);
    return parsedCarNames;
  }

  async run() {
    const output = await this.readCarNames();
    Console.print(output);
  }
}

export default App;
