import { MissionUtils } from '@woowacourse/mission-utils';
import CarList from '../model/CarList.js';
import CONSTANT from '../utils/constants/CONSTANT.js';

class CarServices {
  constructor() {
    this.carList = new CarList();
  }

  getCarList(carNameList) {
    return this.carList.createCarList(carNameList);
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
