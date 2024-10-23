import MESSAGE from '../constant/MESSAGE.js';

class NameValidator {
  runAllFunction(carNameList) {
    carNameList.map((car) => {
      this.validateLength(car);
      this.validateSeparator(car);
    });
  }

  validateLength(carNameList) {
    if (carNameList.length > 4) {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }

  validateSeparator(carNameList) {
    carNameList.forEach((name) => {
      if (/\s/g.test(name)) {
        throw new Error(MESSAGE.CAR_NAME_ERROR);
      }
    });
  }
}

export default NameValidator;
