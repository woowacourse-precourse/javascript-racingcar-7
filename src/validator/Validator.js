class Validator {
  static isValidCarName(cars) {
    const carNameArr = cars.split(',');

    if (carNameArr.some((car) => car.length > 5)) {
      throw new Error('[ERROR] 자동차의 이름은 5자 이하로 부여해야 합니다.');
    }
  }
}

export default Validator;
