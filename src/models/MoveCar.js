import { Random } from '@woowacourse/mission-utils';

class MoveCar {
  static moveForwardIfPossible(carList) {
    carList.forEach(car => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.moveForward();
      }
    });
  }
}

export default MoveCar;
