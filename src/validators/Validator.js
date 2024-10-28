// src/validators/Validator.js
export default class Validator {
  static validateCarNames(input) {
    const names = input.split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);
    if (names.length === 0) {
      throw new Error("[ERROR] 최소 하나의 이름이 필요합니다.");
    }
    names.forEach(name => {
      if (name.length > 5) {
        throw new Error("[ERROR] 이름은 5자를 초과할 수 없습니다.");
      }
    });
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error("[ERROR] 이름이 중복되었습니다.");
    }
    return names;
  }

  static validateRaceTime(input) {
    const number = Number(input);
    if (!Number.isInteger(number) || number <= 0) {
      throw new Error("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
    }
    return number;
  }
}
