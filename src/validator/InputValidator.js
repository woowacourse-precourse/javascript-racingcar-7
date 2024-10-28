export default class InputValidator {

  static carValidatior(cars) {
    if (cars.length === 0) {
      throw new Error("[ERROR] 올바른 자동차 이름을 입력해주세요.");
    }


    cars.forEach(car => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차의 이름은 5자를 초과할 수 없습니다.");
      }
    });

    return cars
  }

  static tryNumberValidator(tryNumber) {
    if (isNaN(tryNumber) || tryNumber < 0) {
      throw new Error("[ERROR] 올바른 시도 횟수를 입력해주세요.");
    }

    return tryNumber
  }

}

