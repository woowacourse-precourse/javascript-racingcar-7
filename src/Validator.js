import { MAX_NAME_LENGTH, MIN_CARS } from "./constants.js";

export class Validator {
  static #validateNotEmptyName(name) {
    if (!name.trim()) {
      throw new Error("[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.");
    }
  }

  static #validateNameLength(name) {
    if (name.trim().length > MAX_NAME_LENGTH) {
      throw new Error(
        `[ERROR] 자동차 이름은 ${MAX_NAME_LENGTH}자를 초과할 수 없습니다.`
      );
    }
  }

  static #validateCarCount(cars) {
    if (cars.length < MIN_CARS) {
      throw new Error(`[ERROR] 최소 ${MIN_CARS}대 이상의 자동차가 필요합니다.`);
    }
  }

  static #validateUniqueCarNames(cars) {
    const uniqueNames = new Set(cars);
    if (uniqueNames.size !== cars.length) {
      throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    }
  }

  static validateName(name) {
    this.#validateNotEmptyName(name);
    this.#validateNameLength(name);
  }

  static validateCars(names) {
    names.forEach((name) => this.validateName(name));
    this.#validateCarCount(names);
    this.#validateUniqueCarNames(names);
  }

  static validteTries(tries) {
    const number = Number(tries);
    if (!Number.isInteger(number) || number <= 0) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    }
  }
}
