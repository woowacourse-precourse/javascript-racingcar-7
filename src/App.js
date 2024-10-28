import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor(cars, rounds) {
    this.cars = [];
    this.rounds = 0;
  }
  setCars(input) {
    const carList = input.split(",").map((name) => name.trim());
    if (carList.some((name) => name.length > 5 || name.length == 0)) {
      throw new Error("자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
    this.cars = carList.map((name) => ({ name, distance: 0 }));
  }

  setRound(input) {
    const rounds = parseInt(input);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error("시도 횟수는 1이상 이여야 합니다.");
    }
    this.rounds = rounds;
    this.startRace();
  }

  moveCars() {
    this.cars = this.cars.map((car) => {
      const shouldMove = MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
      if (shouldMove) {
        return { ...car, distance: car.distance + 1 };
      } else {
        return car;
      }
    });
  }

  printCarPositions() {
    this.cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
    });
    Console.print("");
  }

  startRace() {
    for (let i = 0; i < this.rounds; i++) {
      this.moveCars();
      this.printCarPositions();
    }
    this.announceWinner();
  }
  announceWinner() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));
    const winners = this.cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
    Console.print(`최종우승자: ${winners}`);
  }
  async run() {
    Console.print("경주차 이름을 입력하시오");
    const cars = await Console.readLineAsync("");
    this.setCars(cars);
    Console.print("진행할 라운드를 적으시오.");
    const rounds = await Console.readLineAsync("");
    this.setRound(rounds);
  }
}

export default App;
