class Validator {
  nameValidate(carNames) {
    // SRP, 원칙을 위반하지 않도록 수정 필요~
    const isNameLengthValid = carNames.every(
      name => name.length > 0 && name.length <= 5,
    );
    const isCarNameValid = carNames.every(name =>
      /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]*$/.test(name),
    );
    const isStartsWithNumber = carNames.some(name => /^\d/.test(name));

    if (!isNameLengthValid) {
      throw new Error(
        '자동차 이름은 비어 있지 않고 5글자 이하로 입력해주세요.',
      );
    }

    if (!isCarNameValid) {
      throw new Error(
        '자동차의 이름은 한글, 숫자, 영어로만 구성되어야 합니다.',
      );
    }

    if (isStartsWithNumber) {
      throw new Error('자동차 이름은 숫자로 시작할 수 없습니다.');
    }
  }

  tryCntValidate(tryCnt) {
    if (Number.isNaN(tryCnt)) {
      throw new Error('이동을 시도할 횟수는 숫자로 입력해주세요.');
    }
    if (tryCnt <= 0) {
      throw new Error('이동을 시도할 횟수는 0보다 큰 값이어야 합니다.');
    }
  }
}

export default Validator;
