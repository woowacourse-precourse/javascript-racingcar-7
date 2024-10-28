class InputValidator {
  static validateParticipantNames(input) {
    if (!input.includes(',')) {
      throw new Error('[ERROR] 참가자는 두명 이상이어야합니다.');
    }
    if (input[0] === ',' || input.at(-1) === ',') {
      throw new Error('[ERROR] 쉼표(,)는 맨 앞, 혹은 맨 뒤에 올 수 없습니다.');
    }

    input.split('').forEach((char) => {
      if (
        !(
          (char >= '0' && char <= '9') ||
          (char >= 'A' && char <= 'Z') ||
          (char >= 'a' && char <= 'z') ||
          char === ','
        )
      ) {
        throw new Error(
          '[ERROR] 경주할 자동차 이름 입력 시 숫자, 영어, 쉼표 이외의 문자는 입력할 수 없습니다.',
        );
      }
    });

    const names = input.split(',');
    if (names.length !== new Set(names).size) {
      throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
    }

    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
      }
    });

    return names;
  }

  static validateTryCount(input) {
    const tryCount = Number(input);
    if (!Number.isInteger(tryCount) || tryCount <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 자연수만 입력해야 합니다.');
    }
    return tryCount;
  }
}

export default InputValidator;
