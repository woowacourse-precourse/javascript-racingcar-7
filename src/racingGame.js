import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Car from "./car.js";
import { validateCarName } from "./validation.js";
class RacingGame {
  constructor() {
    this.cars = [];
    this.counts = "";
    this.startGame();
  }

  async init() {
    try {
      const userInputNames = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const names = userInputNames.split(",");
      this.checkCarName(names);
      const userInputCounts = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );
      this.counts = userInputCounts;
    } catch (error) {
      Console.print(error.message);
      this.cars = [];
      await this.init();
    }
  }

  checkCarName(names) {
    names.forEach((element) => {
      const name = element.trim();
      validateCarName(name);
      this.cars.push(new Car(name));
    });
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
    this.printWinner();
  }

  printWinner() {
    let winners = "";
    let maxScore = 0;
    this.cars.forEach((e) => {
      if (maxScore == e.score.length) {
        winners += `, ${e.name}`;
      } else if (maxScore <= e.score.length) {
        maxScore = e.score.length;
        winners = e.name;
      }
    });
    Console.print(`최종 우승자: ${winners}`);
  }
}

export default RacingGame;
