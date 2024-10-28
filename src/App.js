import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carsNames = await Console.readLineAsync(
        "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
      );

      const nameList = carsNames.split(",").map((car) => car.trim());
      this.validCarNames(nameList);

      const playNum = await Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?\n"
      );
      this.validMoveCount(playNum);
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  validCarNames(nameList) {
    nameList.forEach((name) => {
      if (name.length === 0 || name.length > 5) {
        throw new Error("자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    });
  }

  validMoveCount(playNum) {
    if (isNaN(playNum) || playNum <= 0) {
      throw new Error("[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.");
    }
  }

  goToCars(nameList, playNum) {
    let movingCars = new Array(nameList.length).fill(0);

    for (let i = 0; i < playNum; i++) {
      this.moveCars(nameList, movingCars);
      this.nowCar(nameList, movingCars);
      Console.print("\n");
    }

    return movingCars;
  }

  moveCars(nameList, movingCars) {
    nameList.forEach((car, idx) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        movingCars[idx]++;
      }
    });
  }

  nowCar(cars, movingCars) {
    movingCars.forEach((distance, idx) => {
      const car = cars[idx];
      const carPosition = "-".repeat(distance);
      Console.print(`${car} : ${carPosition}`);
    });
  }
}

export default App;
