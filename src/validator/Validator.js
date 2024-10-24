class Validator {
  static isValidCarName(cars) {
    const carNameArr = cars.split(',');
    const carSet = [...new Set(carNameArr)];

    if (carNameArr.some((car) => car.length > 5)) {
      throw new Error('[ERROR] 자동차의 이름은 5자 이하로 부여해야 합니다.');
    } else if (carNameArr.length !== carSet.length) {
      throw new Error('[ERROR] 자동차의 이름은 중복해서 부여할 수 없습니다.');
    } else if (carNameArr.some((car) => car === '')) {
      throw new Error('[ERROR] 자동차에 빈 이름을 부여할 수 없습니다.');
    }
  }
}

export default Validator;
