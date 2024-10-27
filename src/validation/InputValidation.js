const InputValidation = {
  /**
   *
   * @param {string[]} cars - 자동차 이름 배열
   */
  carString(cars) {
    if (cars.some((car) => car.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
    if (new Set(cars).size !== cars.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
    if (cars.some((car) => !car)) {
      throw new Error("[ERROR] 자동차 이름은 비어있지 않은 문자열이어야 합니다.");
    }
  },

  /**
   *
   * @param {string} repeatCount - 반복 횟수
   */
  repeatCountString(repeatCount) {
    const isPlusNumber = /^[1-9]+$/;
    if (!isPlusNumber.test(repeatCount)) {
      throw new Error("[ERROR] 시도 횟수는 양수여야 합니다.");
    }
  },
};

export default InputValidation;
