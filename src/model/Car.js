import NameValidator from '../utils/validators/NameValidator.js';
import CONSTANT from '../utils/constants/CONSTANT.js';

class Car {
  constructor() {
    this.nameValidator = new NameValidator();
  }

  getUserCarNameList(carName) {
    let carNameList = [];
    carNameList = carName.split(CONSTANT.CAR_NAME_SEPARATOR);
    this.nameValidator.runAllFunction(carNameList);
    return carNameList;
  }

  createCar(carNameList) {
    const car = carNameList.map((name) => ({
      name,
      distance: '',
      ranking: 0,
    }));

    return car;
  }
}

export default Car;
