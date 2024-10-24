import Car from './Car.js';
import Validator from './Validator.js';

export default class Model {
  carList = [];

  gameCount;

  setData(userInputData) {
    this.setCarInfo(userInputData.carList);
    this.setGameInfo(userInputData.gameCount);
  }

  setCarInfo(carNameString) {
    const carNameList = carNameString.split(',');
    Validator.isDuplicate(carNameList);

    carNameList.forEach((carName) => {
      Validator.exceedMaxLength(carName);
      this.carList.push(new Car(carName));
    });
  }

  setGameInfo(gameCount) {
    Validator.isChar(gameCount);
    Validator.isNagative(gameCount);
    Validator.isZero(gameCount);
    Validator.exceedMaxCount(gameCount);

    this.gameCount = gameCount;
  }
}
