class Validator {
  static checkNameString(nameString) {
    if (!nameString.trim()) {
      throw new Error('공백이 입력됐습니다');
    }
  }

  static checkRoundCount(roundCount) {
    if (Number.isNaN(roundCount)) {
      throw new Error('숫자를 입력해야합니다');
    }

    if (roundCount === 0) {
      throw new Error('빈 문자열 또는 0은 입력할 수 없습니다');
    }

    if (roundCount < 0) {
      throw new Error('음수는 입력할 수 없습니다');
    }

    if (!Number.isSafeInteger(roundCount)) {
      throw new Error('실수, 정상 범위를 벗어난 정수는 입력할 수 없습니다');
    }
  }

  static checkNames(names) {
    names.forEach((name) => {
      if (names.length > 5) {
        throw new Error('이름은 5글자를 넘을 수 없습니다');
      }

      if (!/^[a-zA-Z]+$/.test(name)) {
        throw new Error('이름은 영문자만 가능합니다');
      }
    });

    if (names.length === 1) {
      throw new Error('플레이어는 1명일 수 없습니다');
    }

    if (names.every((name) => name === names[0])) {
      throw new Error('모든 플레이어들의 이름이 같습니다');
    }
  }
}

export default Validator;
