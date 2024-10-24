import MESSAGE from '../constant/MESSAGE.js';

class NameValidator {
  runAllFunction(carNameList) {
    carNameList.map((car) => {
      this.validateLength(car);
      this.validateSeparator(car);
      this.validateBlankName(car);
      return carNameList;
    });
  }

  validateLength(carName) {
    if (carName.length > 4) {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }

  validateSeparator(carName) {
    if (/[^a-zA-Z0-9가-힣ㄱ-ㅎ]/g.test(carName)) {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }

  validateBlankName(carName) {
    if (carName === '') {
      throw new Error(MESSAGE.CAR_NAME_ERROR);
    }
  }
}

export default NameValidator;
