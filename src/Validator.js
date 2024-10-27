class Validator {
  nameValidate(carNames) {
    if (!this.isNameLengthValid(carNames)) {
      throw new Error(
        '자동차 이름은 비어 있지 않고 5글자 이하로 입력해주세요.',
      );
    }

    if (!this.isCarNameValid(carNames)) {
      throw new Error(
        '자동차의 이름은 한글, 숫자, 영어로만 구성되어야 합니다.',
      );
    }

    if (this.isStartsWithNumber(carNames)) {
      throw new Error('자동차 이름은 숫자로 시작할 수 없습니다.');
    }
  }

  isNameLengthValid(carNames) {
    return carNames.every(name => name.length > 0 && name.length <= 5);
  }

  isCarNameValid(carNames) {
    return carNames.every(name => /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/.test(name));
  }

  isStartsWithNumber(carNames) {
    return carNames.some(name => /^\d/.test(name));
  }
}

export default Validator;
