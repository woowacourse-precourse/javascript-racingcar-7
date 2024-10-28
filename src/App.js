import { Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name, distance) {
    this.name = name;
    this.distance = 0;
  }
  move() {}
}

class App {
  constructor(cars, rounds) {
    this.cars = [];
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
    const cars = await Console.readLineAsync("");
    this.setCars(cars);
  }
}

export default App;
