class Validation {
  static checkNameInput(arr) {
    arr.forEach((name) => {
      if (name.length > 5 || name.length < 1) {
        throw new Error(
          '[ERROR] 이름은 최소 1자 이상, 최대 5자 이하여야 합니다.'
        );
      }
    });
    if (arr.length < 2) {
      throw new Error(
        '[ERROR] 자동차 경주에는 최소 2명 이상의 인원이 필요합니다.'
      );
    }
    if (new Set(arr).size !== arr.length) {
      throw new Error(`[ERROR] 같은 이름은 사용할 수 없습니다.`);
    }
  }

  static checkCountInput(input) {
    if (isNaN(input)) {
      throw new Error('[ERROR] 실행 횟수 입력은 숫자여야 합니다.');
    } else {
      if (input % 1 === 0 && input > 0) return true;
      else
        throw new Error('[ERROR] 실행 횟수 입력은 1 이상의 정수여야 합니다.');
    }
  }
}

export default Validation;
