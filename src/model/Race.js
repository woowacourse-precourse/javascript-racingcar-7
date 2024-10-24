import { Random } from '@woowacourse/mission-utils';
class Race {
  constructor(cars) {
    this.cars = cars;
  }

  moveCar(car) {
    const randomNum = Random.pickNumberInRange(0, 9);

    if (randomNum >= 4) {
      car.move();
    }
  }

  moveAllCars() {
    this.cars.forEach((car) => {
      this.moveCar(car);
    });
  }
}

export default Race;
