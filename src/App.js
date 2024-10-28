import { Console, Random } from "@woowacourse/mission-utils";

class App {
  Exception(condition, message) {
    if (condition) throw new Error(message);
  }

  async getNames() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const namesInput = await Console.readLineAsync("");
    this.Exception(namesInput === "", "[ERROR]");
    return namesInput;
  }
}
