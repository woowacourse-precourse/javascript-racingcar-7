import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await this.getCarNames();
    const count = await this.getMoveCount();
    const movingCars = this.startRace(cars, count);
    this.displayResults(cars, movingCars);
    this.displayWinners(cars, movingCars);
  }

  // 자동차 이름 입력
  async getCarNames() {
    const carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n"
    );

    const cars = carName.split(",").map((car) => car.trim());
    this.validateCarName(cars);

    return cars;
  }

  // 자동차 이름 유효성 검사
  validateCarName(cars) {
    cars.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하이어야 합니다.");
      }
    });
  }

  // 이동 횟수 입력
  async getMoveCount() {
    const count = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    this.validateMoveCount(count);

    return count;
  }

  // 이동 횟수 유효성 검사
  validateMoveCount(count) {
    if (isNaN(count) || count <= 0) {
      throw new Error("[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.");
    }
  }

  // 자동차 전진
  startRace(cars, count) {
    let movingCars = new Array(cars.length).fill(0);

    Console.print("\n");
    Console.print("실행 결과 \n");

    for (let i = 0; i < count; i++) {
      this.moveCars(cars, movingCars);
      this.displayResults(cars, movingCars);
      Console.print("\n");
    }

    return movingCars;
  }

  // 자동차 이동
  moveCars(cars, movingCars) {
    cars.forEach((car, idx) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        movingCars[idx]++;
      }
    });
  }

  // 현재 위치 출력
  displayResults(cars, movingCars) {
    movingCars.forEach((distance, idx) => {
      const car = cars[idx];
      const carPosition = "-".repeat(distance);
      Console.print(`${car} : ${carPosition}`);
    });
  }

  // 우승자 결정
  displayWinners(cars, movingCars) {
    const maxDistance = Math.max(...movingCars);
    const winners = cars.filter((_, idx) => movingCars[idx] === maxDistance);

    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default App;
