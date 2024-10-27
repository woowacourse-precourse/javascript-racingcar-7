import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputString = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const gameCount = Number(
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n")
    );

    if (!Number.isInteger(gameCount))
      throw new Error("[ERROR] 시도할 횟수가 정수가 아닙니다");

    const racingCars = inputString.split(",");

    if (racingCars.some((car) => car.length > 5)) {
      throw new Error("[ERROR] 자동차의 이름이 5자보다 깁니다.");
    }

    const racingCarsPos = {};
    racingCars.forEach((car) => {
      racingCarsPos[car] = 0;
    });

    racingCars.forEach((car) => {
      if (this.getRandomNumber() >= 4) {
        this.moveCar(racingCarsPos, car);
      }
    });
  }

  moveCar(racingCarsPos, car) {
    racingCarsPos[car] += 1;
  }

  getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber;
  }
}

export default App;
