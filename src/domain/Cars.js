import utils from '../utils/utils.js';

class Cars {
  static #ERROR_MESSAGE = {
    size: '[ERROR] 2개 이상의 자동차 이름을 입력해주세요.',
    length:
      '[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 1자 이상 5자 이하만 가능합니다.',
    duplication: '[ERROR] 중복된 자동차 이름이 있습니다.',
  };

  static #SEPARATOR = ',';

  static #RANGE = {
    size: 2,
    minLength: 1,
    maxLength: 5,
  };

  #input;

  #cars = new Map();

  constructor(input) {
    this.#input = input;
    this.#validate();
  }

  #validate() {
    const cars = this.#input.split(Cars.#SEPARATOR);

    utils.validateEmpty(this.#input);
    Cars.#validateSize(cars);

    cars.forEach((car) => {
      Cars.#validateNameLength(car);
      this.#validateDuplication(car);
      this.#cars.set(car, 0);
    });
  }

  static #validateSize(cars) {
    if (cars.length < Cars.#RANGE.size) {
      throw new Error(Cars.#ERROR_MESSAGE.size);
    }
  }

  static #validateNameLength(car) {
    const { minLength, maxLength } = Cars.#RANGE;

    if (car.length < minLength || car.length > maxLength) {
      throw new Error(Cars.#ERROR_MESSAGE.length);
    }
  }

  #validateDuplication(car) {
    if (this.#cars.has(car)) {
      throw new Error(Cars.#ERROR_MESSAGE.duplication);
    }
  }

  getCars() {
    return this.#cars;
  }
}

export default Cars;
