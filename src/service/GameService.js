import CarService from './CarService.js';
import OutputView from '../view/OutputView.js';

class GameServices {
  constructor() {
    this.carService = new CarService();
    this.outputView = new OutputView();
  }

  moveCar(carNameList, gameRound) {
    let carObj = this.carService.getCarList(carNameList);
    for (let round = 0; round < gameRound; round++) {
      this.carService.checkMovement(carObj);
      this.outputView.gameResult(carObj);
    }
    return carObj;
  }
}

export default GameServices;
