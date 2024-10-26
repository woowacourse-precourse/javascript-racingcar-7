import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    this.getUserInput();
  }

  async getUserInput() {
    try {
      const inputName = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
      );
      const names = inputName.split(",").map((name)=>name.trim())
      this.validateCarNames(names);
      const inputCount = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요? \n"
      );
      this.validateMoveCount(inputCount);

      const cars = this.initializeCars(names);

      Console.print(`\n`);
      Console.print(`실행 결과`);
      this.startRace(cars, parseInt(inputCount));

      // Console.print(`결과 : ${names}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }

  validateCarNames(names) {
    names.forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR]");
    });
  }

  validateMoveCount(count) {
    if (!Number.isInteger(parseInt(count)) || parseInt(count) <= 0) {
      throw new Error("[ERROR]");
    }
  }

  initializeCars(names) {
    return names.map((name) => ({ name, position: 0 }));
  }

  startRace(cars, moves) {
    for (let i = 0; i < moves; i++) {
      this.runRound(cars);
    }
    this.getWinners(cars);
  }

  runRound(cars) {
    cars.forEach((car) => this.moveCar(car));
    this.printRoundResults(cars);
  }

  moveCar(car) {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) car.position++;
  }

  printRoundResults(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name}: ${'-'.repeat(car.position)}`);
    });
    Console.print(`\n`);
  }

  getWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition).map((car) => car.name);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
export default App;