import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(carName) {
    if (carName.length > 5) {
      throw new Error("[ERROR]");
    }
    this.name = carName;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.position++;
    }
  }
}

class RacingGame {
  constructor(carsNames) {
    this.cars = carsNames.split(",").map((name) => new Car(name.trim()));
  }

  play(number) {
    const rounds = Number(number);
    if (isNaN(rounds)) {
      throw new Error("[ERROR]");
    }
    for (let i = 0; i < rounds; i++) {
      this.moveAllCars();
    }
  }
  moveAllCars() {
    this.cars.forEach((car) => car.move());
  }
}

class App {
  async run() {
    try {
      const carsNames = await Console.readLineAsync(
        "경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n"
      );
      const playsNumber = await Console.readLineAsync("시도할 횟수\n");

      const game = new RacingGame(carsNames);
      game.play(playsNumber);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
