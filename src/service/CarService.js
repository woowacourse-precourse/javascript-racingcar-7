import { MissionUtils } from '@woowacourse/mission-utils';
import CarList from '../model/CarList.js';

class CarServices {
  constructor() {
    this.carList = new CarList();
  }

  getCarList(carNameList) {
    return this.carList.createCarList(carNameList);
  }

  checkMovement(carObj) {
    carObj.forEach((car) => {
      let number = MissionUtils.Random.pickNumberInRange(0, 9);

      if (number >= 4) {
        car.distance += '-';
      }
    });
  }
}
export default CarServices;
