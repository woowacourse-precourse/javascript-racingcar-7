class Validator {
  static checkNameOverRange(carName) {
    if(carName.length > 5 || carName.length < 1) {
      throw new Error(`[ERROR] : 자동차의 이름은 5자 이하만 가능합니다 (${carName})`);
    }
    return carName;
  }

  static checkEmptyNames(names) {
    if (names.some(name => !name.trim())) {
      throw new Error("[ERROR]: 자동차 이름은 공백일 수 없습니다");
    }
  }

  static checkNameDuplicate(names) {
    if(names.length !== new Set(names).size) {
      throw new Error("[ERROR] : 자동차 이름은 중복될 수 없습니다");
    }
  }

  static checkNaturalNumber(number) {
    if(number === "" || isNaN(number)) {
      throw new Error("[ERROR] : 입력값이 비어있거나 숫자가 아닙니다");
    }
    if(number <= 0) {
      throw new Error("[ERROR] : 입력값은 0보다 큰 자연수이어야 합니다");
    }
    if(!Number.isInteger(number)) {
      throw new Error("[ERROR] : 입력값은 양의 정수이어야 합니다")
    }
  }
}

export default Validator;