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
      const inputTry = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );
      Console.print(`실행 결과 \n`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}
export default App;