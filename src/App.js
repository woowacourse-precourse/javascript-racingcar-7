import { Console, Random } from "@woowacourse/mission-utils";
import { Validator } from "./Validator.js";

class App {
  async run() {
    const carName = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = carName.split(",");
    Validator.validateCarNames(carNames);

    const playNum = await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
    Validator.validatePlayNum(playNum)

    const results = {};

    carNames.forEach(name => {
      results[name] = "";
    });
    Console.print("\n실행 결과");

    for (let i = 0; i < playNum; i++) {
      carNames.forEach(name => {
        const randomNum = Random.pickNumberInRange(0, 9);

        if (randomNum >= 4) {
          results[name] += "-";
        }

        Console.print(`${name} : ${results[name]}`);
      });
      Console.print("");

    }
    const maxMoves = Math.max(...Object.values(results).map((moves) => moves.length)); 
    const winners = carNames.filter((name) => results[name].length === maxMoves);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
