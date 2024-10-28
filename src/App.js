import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carsNames = await Console.readLineAsync(
        "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const playsNumber = await Console.readLineAsync("시도할 횟수\n");
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
