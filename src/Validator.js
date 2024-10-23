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
  }
}

export default Validator;
