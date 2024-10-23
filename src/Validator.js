class Validator {
  static nameString(nameString) {
    if (!nameString.trim()) {
      throw new Error('공백이 입력됐습니다');
    }
  }
}

export default Validator;
