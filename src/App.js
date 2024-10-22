import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const cars_list = cars.split(",");
    Console.print(cars_list);
  }
}

export default App;
