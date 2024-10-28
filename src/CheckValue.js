class CheckValue {
  // 입력받은 값이 lengh보다 길다면 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨다.
  checkLength(input, length) {
    if (input.length > length) {
      throw new Error("[ERROR] 5자 이상의 이름을 입력했습니다.");
    }
  }
}

export default CheckValue;
