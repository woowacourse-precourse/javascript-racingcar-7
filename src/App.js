import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const cars_list = cars.split(",");
    Console.print(cars_list);

    const rail = new Array(cars_list.length).fill(0);

    for (let i = 0; i < times; i++) {
      cars_list.forEach((car, index) => {
        const random = Math.floor(Math.random() * 10);
        Console.print(random);
        if (random >= 4) {
          rail[index]++;
        }
      });
      Console.print(rail);
    }
  }
}

export default App;
