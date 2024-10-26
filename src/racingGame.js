import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Car from "./car.js";

class RacingGame {
  constructor() {
    this.cars = [];
    this.counts = "";
    this.startGame();
  }

  async init() {
    let names;
    const userInputNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    names = userInputNames.split(",");
    names.forEach((element) => {
      this.cars.push(new Car(element));
    });
    const userInputCounts = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    this.counts = userInputCounts;
  }

  getScores() {
    this.cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        car.score += "-";
      }
      Console.print(`${car.name} : ${car.score} `);
    });
    Console.print("");
  }

  async startGame() {
    await this.init();
    Console.print("실행 결과");
    for (let i = 0; i < this.counts; i++) {
      this.getScores();
    }
  }
}

export default RacingGame;
