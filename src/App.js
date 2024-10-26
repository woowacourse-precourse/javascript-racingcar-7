import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    this.getUserInput();
  }

  async getUserInput() {
    try {
      const inputName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
      );
      const names = inputName.split(",").map((name)=>name.trim())
      this.validateCarNames(names);
      const inputCount = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );
      this.validateMoveCount(inputCount);

      const cars = this.initializeCars(names);
      Console.print(`실행 결과 \n`);
      // Console.print(`결과 : ${names}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  validateCarNames(names) {
    names.forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR]");
    });
  }

  validateMoveCount(count) {
    if (!Number.isInteger(parseInt(count)) || parseInt(count) <= 0) {
      throw new Error("[ERROR]");
    }
  }

  initializeCars(names) {
    return names.map((name) => ({ name, position: 0 }));
  }
}
export default App;