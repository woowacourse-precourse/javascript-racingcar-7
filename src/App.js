import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const racingCars = inputString.split(",");

    this.validateCarName(racingCars);

    const gameCount = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    this.validateGameCount(gameCount);

    const racingCarsPos = this.initRacingCarsPos(racingCars);

    for (let i = 0; i < gameCount; i++) {
      this.playTurn(racingCars, racingCarsPos);
    }

    const winners = this.pickWinner(racingCarsPos);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  initRacingCarsPos(racingCars) {
    const racingCarsPos = {};
    racingCars.forEach((car) => {
      racingCarsPos[car] = "";
    });
    return racingCarsPos;
  }

  validateGameCount(gameCount) {
    if (!Number.isInteger(gameCount))
      throw new Error("[ERROR] 시도할 횟수가 정수가 아닙니다");

    if (gameCount < 0) throw new Error("[ERROR] 시도할 횟수가 음수입니다");
  }

  validateCarName(racingCars) {
    if (racingCars.some((car) => car.length > 5)) {
      throw new Error("[ERROR] 자동차의 이름이 5자보다 깁니다.");
    }

    if (racingCars.some((car) => !car.trim())) {
      throw new Error("[ERROR] 자동차 이름은 비어있을 수 없습니다.");
    }

    if (new Set(racingCars).size !== racingCars.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }

  pickWinner(racingCarsPos) {
    const posArray = Object.values(racingCarsPos).map((pos) => pos.length);

    const maxPos = Math.max(...posArray);

    const winners = Object.entries(racingCarsPos)
      .filter(([name, item]) => item.length === maxPos)
      .map(([name]) => name);

    return winners;
  }

  playTurn(racingCars, racingCarsPos) {
    racingCars.forEach((car) => {
      this.moveCar(racingCarsPos, car);
      Console.print(`${car} : ${racingCarsPos[car]}`);
    });
    Console.print("\n");
  }

  moveCar(racingCarsPos, car) {
    if (this.getRandomNumber() >= 4) {
      racingCarsPos[car] += "-";
    }
  }

  getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
}

export default App;
