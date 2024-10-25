export default class ValidateCarNamesInput {
  static validate(carNames) {
    const names = carNames.split(",");

    this.validateNumberOfCars(names);
    names.forEach((name) => {
      this.validateCarNameLength(name);
      this.validateCarNameFormat(name);
    });

    return names;
  }

  static validateNumberOfCars(names) {
    if (names.length < 2 || names.length > 10)
      throw new Error(
        "[ERROR] 경주할 자동차는 최소 2대 이상, 최대 10대까지 가능합니다."
      );
  }

  static validateCarNameLength(name) {
    if (name.length > 5)
      throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  }

  static validateCarNameFormat(name) {
    if (!/^[a-zA-Z가-힣]+$/.test(name)) {
      throw new Error("[ERROR] 자동차 이름은 영어와 한글만 허용됩니다.");
    }
  }
}
