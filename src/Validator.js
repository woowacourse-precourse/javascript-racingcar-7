class Validator {
  static MESSAGE = Object.freeze({
    CAR_NAME_MIN_TWO: "[ERROR] 자동차 이름을 두개 이상 입력해주세요",
    CAR_NAME_EXCEEDS_FIVE_CHARACTERS:
      "[ERROR] 자동차 이름은 5자 이하로 입력해주세요",
    NOT_A_POSITIVE_INTEGER: "[ERROR] 시도 횟수는 양의 정수로 입력해주세요",
  });

  static validateCarNamesInput(input) {
    if (input.length < 2) {
      throw new Error(this.MESSAGE.CAR_NAME_MIN_TWO);
    }
    input.forEach((el) => {
      if (el.length > 5) {
        throw new Error(this.MESSAGE.CAR_NAME_EXCEEDS_FIVE_CHARACTERS);
      }
    });
  }
  static validateAttemptCountInput(input) {
    if (isNaN(input) || input < 0 || !Number.isInteger(input)) {
      throw new Error(this.MESSAGE.NOT_A_POSITIVE_INTEGER);
    }
  }
}
export default Validator;
