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
}

export default Car;
