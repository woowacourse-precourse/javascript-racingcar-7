import { MissionUtils } from '@woowacourse/mission-utils';
import CarList from './carList/CarList.js';
import OutputView from './view/OutputView.js';

class MoveCar {
  constructor() {
    this.carList = new CarList();
    this.outputView = new OutputView();
  }

  getCarObj(carNameList) {
    return this.carList.createCarObj(carNameList);
  }

  checkMovement(carObj) {
    carObj.forEach((car) => {
      let number = MissionUtils.Random.pickNumberInRange(0, 9);

      if (number >= 4) {
        car.distance += '-';
      }
    });
  }

  moveCar(carNameList, gameRound) {
    let carObj = this.getCarObj(carNameList);
    for (let round = 0; round < gameRound; round++) {
      this.checkMovement(carObj);
      this.outputView.gameResult(carObj);
      this.outputView.spacing();
    }
    return carObj;
  }
}
export default MoveCar;
