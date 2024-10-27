import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNames = await this.getCarNames();
    const roundCount = await this.getRoundCount();
    Console.print("\n실행 결과");
    const carStates = carNames.map((car) => ({ name: car, position: "" }));

    this.simulateRounds(carStates, roundCount);
    this.printWinners(carStates);
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carNamesInput.split(",").map((name) => name.trim());

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 이름은 5글자 이하로 입력해주세요.`);
      } else if (name.length === 0) {
        throw new Error(`[ERROR] 이름이 입력되지 않았습니다.`);
      }
    });

    return carNames;
  }

  async getRoundCount() {
    const roundCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    if (Number.isNaN(Number(roundCount))) {
      throw new Error(`[ERROR] ${roundCount}는 숫자가 아닙니다.`);
    } else if (Number(roundCount) === 0 || Number(roundCount) === " ") {
      throw new Error(`[ERROR] 1 이상의 숫자를 입력해주세요.`);
    }

    return Number(roundCount);
  }

  simulateRounds(carStates, roundCount) {
    for (let i = 0; i < roundCount; i += 1) {
      carStates.forEach((car) => this.moveCar(car));
      this.printRoundResults(carStates);
    }
  }

  moveCar(car) {
    const moveDecision = MissionUtils.Random.pickNumberInRange(0, 9);
    if (moveDecision >= 4) {
      car.position += "-";
    }
  }

  printRoundResults(carStates) {
    carStates.forEach((car) => {
      Console.print(car.name + " : " + car.position);
    });
    Console.print("");
  }

  printWinners(carStates) {
    const maxDistance = Math.max(...carStates.map((car) => car.position.length));
    const winningCars = carStates.filter(
      (car) => car.position.length === maxDistance
    );
    Console.print("최종 우승자 : " + winningCars.map((car) => car.name).join(", "));
  }
}

export default App;
