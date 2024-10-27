class Validation {
  static validateCarNames(carList) {
    carList.forEach((name) => {
      // 자동차 이름이 5자 이상일 경우
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
    // 자동차 이름이 없을 경우
    if (carList.length === 0 || carList.some((name) => name === "")) {
      throw new Error("[ERROR] 자동차 이름을 입력해야 합니다.");
    }

    // 자동차 이름이 쉼표로 구분되지 않을 경우
    const validateSeparator = carList.find((name) => /[^a-zA-Z0-9]/.test(name));
    if (validateSeparator) {
      throw new Error(
        "[ERROR] 자동차 이름은 쉼표(,)로만 구분되어야 하며, 다른 기호는 사용할 수 없습니다."
      );
    }

    // 자동차 이름이 중복될 경우
    const uniqueNames = new Set(carList);
    if (uniqueNames.size !== carList.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }

  // 경주 횟수가 0이하일 경우
  static validateCnt(cnt) {
    if (isNaN(cnt) || cnt <= 0) {
      throw new Error("[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다.");
    }
  }
}

export default Validation;
