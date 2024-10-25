import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../model/Car.js';
import CONSTANT from '../utils/constants/CONSTANT.js';

class CarServices {
  constructor() {
    this.car = new Car();
  }

  getCarList(carNameList) {
    return this.car.createCar(carNameList);
  }

  checkMovement(carObj) {
    carObj.forEach((car) => {
      let number = MissionUtils.Random.pickNumberInRange(
        CONSTANT.MIN_RANDOM_NUMBER,
        CONSTANT.MAX_RANDOM_NUMBER,
      );

      if (number >= CONSTANT.MIN_MOVEMENT_CONDITION_NUMBER) {
        car.distance += '-';
      }
    });
  }
}
export default CarServices;
