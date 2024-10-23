class Validator {
  static nameString(nameString) {
    if (!nameString.trim()) {
      throw new Error('공백이 입력됐습니다');
    }

    if (!nameString.includes(',')) {
      throw new Error('플레이어는 1명일 수 없습니다');
    }
  }

  static repeatCount(repeatCount) {
    if (Number.isNaN(repeatCount)) {
      throw new Error('숫자를 입력해야합니다');
    }

    if (repeatCount === 0) {
      throw new Error('빈 문자열 또는 0은 입력할 수 없습니다');
    }

    if (repeatCount < 0) {
      throw new Error('음수는 입력할 수 없습니다');
    }

    if (!Number.isSafeInteger(repeatCount)) {
      throw new Error('실수, 정상 범위를 벗어난 정수는 입력할 수 없습니다');
    }
  }

  static nameArray(nameArray) {
    nameArray.forEach((name) => {
      if (name.length > 5) {
        throw new Error('이름은 5글자를 넘을 수 없습니다');
      }

      if (!/^[a-zA-Z]+$/.test(name)) {
        throw new Error('이름은 영문자만 가능합니다');
      }
    });
  }
}

export default Validator;
