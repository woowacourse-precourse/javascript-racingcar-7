import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const times = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const cars_list = cars.split(",");
    // Console.print(cars_list);
    Console.print("");
    const rail = new Array(cars_list.length).fill("");
    Console.print("실행 결과");
    for (let i = 0; i < times; i++) {
      cars_list.forEach((car, index) => {
        const random = Math.floor(Math.random() * 10);
        // Console.print(random);
        if (random >= 4) {
          rail[index] += "-";
        }
        Console.print(car + " : " + rail[index]);
      });
      Console.print("");
      // Console.print(rail);
    }

    const maxLength = Math.max(...rail.map((r) => r.length));
    const winners = cars_list.filter(
      (car, index) => rail[index].length === maxLength
    );

    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default App;
