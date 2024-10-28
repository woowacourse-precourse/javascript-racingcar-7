import { printOutput } from "./util/missionUtil";
import Car from "./Car";

export default class Race {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  race(tryCount) {
    printOutput("\n실행 결과");

    for (let i = 0; i < tryCount; i++) {
      this.#moveAllCars();
      printOutput("");
    }

    this.#announceWinners();
  }

  #moveAllCars() {
    this.#cars.forEach((car) => {
      const status = car.moveForward();
      printOutput(status);
    });
  }

  #getMaxPosition() {
    return Math.max(...this.#cars.map((car) => car.getPosition().length));
  }

  #announceWinners() {
    const maxPosition = this.#getMaxPosition();
    const winners = this.#cars
      .filter((car) => car.getPosition().length === maxPosition)
      .map((car) => car.getName())
      .join(", ");

    printOutput(`최종 우승자 : ${winners}`);
  }
}
