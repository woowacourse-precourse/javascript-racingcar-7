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

  getWinner() {
    const maxPostion = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars.filter((car) => car.getPosition() === maxPostion).map((car) => car.getName());
  }
}

export default Race;
