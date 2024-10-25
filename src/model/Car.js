import NameValidator from '../utils/validators/NameValidator.js';

class Car {
  constructor() {
    this.nameValidator = new NameValidator();
  }

  getUserCarNameList(carName) {
    let carNameList = [];
    carNameList = carName.split(',');
    this.nameValidator.runAllFunction(carNameList);
    return carNameList;
  }
}

export default Car;
