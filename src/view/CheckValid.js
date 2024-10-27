class CheckValid {
  carNameException(carArr) {
    carArr.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      } else if (car.trim().length == 0) {
        throw new Error("[ERROR] 자동차 이름을 1자 이상 입력해주세요.");
      }
    });
  }

  moveCntCheckValid(moveCnt) {
    if (isNaN(moveCnt)) {
      throw new Error("[ERROR] 시도 횟수를 숫자로 입력해주세요.");
    }
  }
}

export default CheckValid;
