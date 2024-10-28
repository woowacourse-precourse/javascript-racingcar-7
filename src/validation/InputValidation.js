import {
  CarNameDuplicatedError, CarNameEmptyError, CarNameLengthError, RepeatCountError,
} from "../errors/index.js";

const InputValidation = {
  /**
   *
   * @param {string[]} cars - 자동차 이름 배열
   */
  carString(cars) {
    if (cars.some((car) => car.length > 5)) {
      throw new CarNameLengthError();
    }
    if (new Set(cars).size !== cars.length) {
      throw new CarNameDuplicatedError();
    }
    if (cars.some((car) => !car)) {
      throw new CarNameEmptyError();
    }
  },

  /**
   *
   * @param {string} repeatCount - 반복 횟수
   */
  repeatCountString(repeatCount) {
    const isPlusNumber = /^[1-9]+$/;
    if (!isPlusNumber.test(repeatCount)) {
      throw new RepeatCountError();
    }
  },
};

export default InputValidation;
