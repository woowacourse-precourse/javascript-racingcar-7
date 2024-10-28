import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1. 자동차 이름 입력
    const carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분) \n"
    );

    const cars = carName.split(",").map((car) => car.trim());

    // 2. 이동 횟수 입력
    const count = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    // 3. 자동차 전진
    let movingCars = new Array(cars.length).fill(0);

    Console.print("\n");
    Console.print("실행 결과 \n");
    for (let i = 0; i < count; i++) {
      cars.forEach((car, idx) => {
        const randomNum = Random.pickNumberInRange(0, 9);
        if (randomNum >= 4) {
          movingCars[idx]++;
        }
      });

      // 4. 결과 출력
      movingCars.forEach((distance, idx) => {
        const car = cars[idx];
        const carPosition = "-".repeat(distance);
        Console.print(`${car} : ${carPosition}`);
      });

      Console.print("\n");
    }
  }
}

export default App;
