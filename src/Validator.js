const ERROR_MESSAGES = {
  EMPTY_INPUT: '공백이 입력됐습니다',
  NOT_A_NUMBER: '숫자를 입력해야합니다',
  ZERO_OR_EMPTY: '빈 문자열 또는 0은 입력할 수 없습니다',
  NEGATIVE_NUMBER: '음수는 입력할 수 없습니다',
  UNSAFE_INTEGER: '실수, 정상 범위를 벗어난 정수는 입력할 수 없습니다',
  NAME_TOO_LONG: '이름은 5글자를 넘을 수 없습니다',
  NAME_NOT_ALPHABET: '이름은 영문자만 가능합니다',
  SINGLE_PLAYER: '플레이어는 1명일 수 없습니다',
  ALL_NAMES_SAME: '모든 플레이어들의 이름이 같습니다',
  SAME_NAMES: '중복된 이름이 있습니다',
};

class Validator {
  static checkNameString(nameString) {
    if (!nameString.trim()) {
      throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
    }
  }

  static checkRoundCount(roundCount) {
    if (Number.isNaN(roundCount)) {
      throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
    }

    if (roundCount === 0) {
      throw new Error(ERROR_MESSAGES.ZERO_OR_EMPTY);
    }

    if (roundCount < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }

    if (!Number.isSafeInteger(roundCount)) {
      throw new Error(ERROR_MESSAGES.UNSAFE_INTEGER);
    }
  }

  static checkNames(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.NAME_TOO_LONG);
      }

      if (!/^[a-zA-Z]+$/.test(name)) {
        throw new Error(ERROR_MESSAGES.NAME_NOT_ALPHABET);
      }
    });

    if (names.length === 1) {
      throw new Error(ERROR_MESSAGES.SINGLE_PLAYER);
    }

    if (names.every((name) => name === names[0])) {
      throw new Error(ERROR_MESSAGES.ALL_NAMES_SAME);
    }

    const nameSet = new Set(names);
    if (nameSet.size !== names.length) {
      throw new Error(ERROR_MESSAGES.SAME_NAMES);
    }
  }
}

export default Validator;
