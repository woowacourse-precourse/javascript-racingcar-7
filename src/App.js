import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const nameList = await this.carNames();
      const playNum = await this.getMoveCount();

      const movingCars = this.goToCars(nameList, playNum);
      this.winnerCar(nameList, movingCars);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async carNames() {
    const carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n"
    );

    const cars = carName.split(",").map((car) => car.trim());
    this.validCarNames(cars);

    return cars;
  }
  async getMoveCount() {
    const count = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    this.validMoveCount(count);

    return count;
  }

  validCarNames(nameList) {
    if (nameList.some((name) => name.length === 0 || name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
    return nameList;
  }

  validMoveCount(playNum) {
    if (!Number.isInteger(playNum) || playNum <= 0) {
      throw new Error("[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.");
    }
  }

  goToCars(nameList, playNum) {
    const movingCars = new Array(nameList.length).fill(0);

    Console.print("\n경기 시작!");
    for (let i = 0; i < playNum; i++) {
      this.moveCars(nameList, movingCars);
      Console.print("\n");
    }

    return movingCars;
  }

  moveCars(nameList, movingCars) {
    nameList.forEach((car, idx) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) movingCars[idx]++;
      this.displayProgress(car, movingCars[idx]);
    });
  }

  displayProgress(car, position) {
    const progress = "-".repeat(position);
    Console.print(`${car} : ${progress}`);
  }

  winnerCar(nameList, movingCars) {
    const maxDistance = Math.max(...movingCars);
    const winners = nameList.filter(
      (_, idx) => movingCars[idx] === maxDistance
    );
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
