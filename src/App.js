import { Console, Random } from "@woowacourse/mission-utils";
import { Validator } from "./Validator.js";

class App {
  async run() {
    const carNames = await this.getCarNames();
    const raceRounds = await this.getRaceRounds();
    const distances = this.initializeDistances(carNames);

    this.printRaceResults(carNames, raceRounds, distances);
    this.printWinners(carNames, distances);
  }

  async getCarNames() {
    const carNameInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const carNames = carNameInput.split(",");
    Validator.CarNames(carNames);
    
    return carNames;
  }

  async getRaceRounds() {
    const raceRounds = await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
    Validator.RaceRounds(raceRounds);
    
    return raceRounds;
  }

  initializeDistances(carNames) {
    const distances = {};
    carNames.forEach(name => {
      distances[name] = "";
    });

    return distances;
  }
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
