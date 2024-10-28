import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carsNames = await Console.readLineAsync(
        "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const nameList = carsNames.split(",").map((car) => car.trim());

      console.log(nameList);
      const playNum = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
    } catch (error) {
      Console.readLineAsync(error.message);
      throw error;
    }
  }
}

export default App;
