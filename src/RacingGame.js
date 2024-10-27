import { MissionUtils } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => ({ name, position: "" }));
  }

  moveCar(car) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      car.position += "-";
    }
  }

  moveAllCars() {
    this.cars.forEach((car) => this.moveCar(car));
  }
}

export default RacingGame;
