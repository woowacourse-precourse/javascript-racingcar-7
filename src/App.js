import { Console, MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = 0;
  }
  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.distance += 1;
    }
  }
}

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
    Console.print(carList);
  }
  startRace() {}
  announceWinner() {}
  async run() {
    Console.print("경주차 이름을 입력하시오");
    const cars = await Console.readLineAsync("");
    this.setCars(cars);
    Console.print("진행할 라운드를 적으시오.");
    const rounds = await Console.readLineAsync("");
  }
}

export default App;
