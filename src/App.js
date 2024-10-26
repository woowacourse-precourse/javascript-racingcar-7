import { Console, Random } from "@woowacourse/mission-utils";
import { Validator } from "./Validator.js";

class App {
  async run() {
    const carNames = await this.getCarNames();
    const raceRounds = await this.getRaceRounds();
    const distances = this.initializeDistances(carNames);

    this.printRoundResults(carNames, raceRounds, distances);
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

  moveCar(name, distances) {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      distances[name] += "-";
    }
  }

  printRoundResults(carNames, raceRounds, distances) {
    Console.print("\n실행 결과");

    for (let i = 0; i < raceRounds; i++) {
      this.printCarDistance(carNames, distances);
      Console.print(""); // 각 라운드 사이에 여백 추가
    }
  }

  printCarDistance(carNames, distances) {
    carNames.forEach(name => {
      this.moveCar(name, distances);
      Console.print(`${name} : ${distances[name]}`); 
    });
  }

  printWinners(carNames, distances) {
    const maxMoveDistance = Math.max(...Object.values(distances).map(moves => moves.length));
    const raceWinners = carNames.filter(name => distances[name].length === maxMoveDistance);
    Console.print(`최종 우승자 : ${raceWinners.join(", ")}`);
  }
}

export default App;
