import NameValidator from '../validate/NameValidator.js';

class CarList {
  constructor() {
    this.nameValidator = new NameValidator();
  }

  getUserCarNameList(carName) {
    let carNameList = [];
    carNameList = carName.split(',');
    this.nameValidator.runAllFunction(carNameList);
    this.createCarObj(carNameList);
    return carNameList;
  }

  createCarObj(carNameList) {
    const carList = carNameList.map((name) => ({
      carName: name,
      distance: '',
      ranking: 0,
    }));

    return carList;
  }
}

export default CarList;
