import NameValidator from '../validate/NameValidator.js';

class CarList {
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

export default CarList;
