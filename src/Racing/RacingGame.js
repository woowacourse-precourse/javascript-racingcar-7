import View from "../View/View.js";
import Car from "./Car.js";

class RacingGame {
  constructor() {
    this.carNames = [];
    this.cars = [];
    this.repeatTime = 0;
  }

  async start() {
    this.carNames = await View.readCarsName();
    this.cars = this.carNames.map((name) => new Car(name));
    this.repeatTime = await View.readRepeatTime();

    View.print("실행 결과");
    for (let i = 0; i < this.repeatTime; i++) {
      this.cars.forEach((car) => this.moveCar(car));
      this.displayCurrentDistances();
    }
    this.getWinners();
    // 추후 자세히 구현
  }

  moveCar(car) {
    if (car.canMove()) {
      car.move();
    }
  }

  displayCurrentDistances() {
    this.cars.forEach((car) => View.print(car.currentDistance()));
    View.print("");
  }
}

export default RacingGame;
