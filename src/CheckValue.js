class CheckValue {
  checkLength(input, length) {
    if (input.length > length) {
      throw new Error("[ERROR] 5자 이상의 이름을 입력했습니다.");
    }
  }
}

export default CheckValue;
