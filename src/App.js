import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = (
      await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      )
    )
      .trim()
      .split(",");

    const racingInfo = {};

    cars.forEach((car) => {
      racingInfo[car] = 0;

      if (5 < car.length) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });

    const tries = await Console.readLineAsync("시도할 회수는 몇 회인가요?\n");

    Console.print(`경주할 자동차: ${cars.join(", ")} 시도할 횟수: ${tries}`);
  }
}

export default App;
