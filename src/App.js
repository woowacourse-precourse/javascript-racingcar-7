import { Console } from "@woowacourse/mission-utils";
import { validateCarsInput } from "./utils/validateInput";
import { runRaceRounds } from "./utils/race";
import { checkWinner } from "./utils/checkWinner";

class App {
  async run() {
    let cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    validateCarsInput(cars);
    cars = cars.split(",").map((car) => car.trim());

    const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    Console.print(`\n실행 결과`);
    const result = runRaceRounds(cars, count);
    checkWinner(cars, result);
  }
}

export default App;
