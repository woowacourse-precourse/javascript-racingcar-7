import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const carNameString = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    let carNames = carNameString
      .split(",")
      .map((carName) => this.validateName(carName));
    carNames = this.validateDuplicateName(carNames);

    let playNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    playNum = this.isPositiveNumber(playNum);

    const racingCars = carNames.map((carName) => {
      return { name: carName, score: 0 };
    });

    Console.print("\n실행 결과");
    for (let i = 0; i < playNum; i++) {
      racingCars.map((car) => {
        this.randomForward(car);
        this.printRacingcarInfo(car);
      });
      Console.print("\n");
    }

    Console.print(
      `최종 우승자 : ${this.getWinner(racingCars)
        .map((car) => car.name)
        .join(", ")}`
    );
  }

  randomForward(car) {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
      car.score += 1;
    }
  }

  printRacingcarInfo(car) {
    Console.print(`${car.name} : ${"-".repeat(car.score)}`);
  }

  getWinner(racingCars) {
    let winner = [];

    racingCars.map((car) => {
      if (winner.length === 0) {
        winner.push(car);
      } else if (winner[0].score === car.score) {
        winner.push(car);
      } else if (winner[0].score < car.score) {
        winner = [car];
      }
    });

    return winner;
  }

  validateName(name) {
    if (name === "" || name === null || name === undefined) {
      throw new Error("[ERROR] 자동차 이름은 비어있을 수 없습니다");
    }
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다");
    }

    return name;
  }

  validateDuplicateName(names) {
    const nameSet = new Set(names);

    if (names.length !== nameSet.size) {
      throw new Error("[ERROR] 중복되지 않는 이름을 입력해 주세요");
    }

    return names;
  }

  isPositiveNumber(num) {
    if (isNaN(num)) {
      throw new Error("[ERROR] 시도 횟수를 올바른 숫자로 입력해 주세요");
    } else if (num <= 0) {
      throw new Error("[ERROR] 시도 횟수를 양수로 입력해 주세요");
    }

    return num;
  }
}

export default App;
