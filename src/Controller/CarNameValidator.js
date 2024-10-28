// 유효성 검증
class CarNameValidator {
  static validate(carNameArray) {
    // 자동차가 1대 이하인지 확인
    if (carNameArray.length < 2) {
      throw new Error("[ERROR] 경주할 자동차는 최소 2대 이상이어야 합니다.");
    }

    for (const name of carNameArray) {
      // 자동차 이름이 빈 값인지 확인
      if (name.trim() === "") {
        throw new Error("[ERROR] 자동차 이름은 빈 값일 수 없습니다.");
      }
      // 자동차 이름이 5자 이하인지 확인
      if (name.trim().length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
      }
    }

    // 중복된 이름이 있는지 확인
    const nameSet = new Set(carNameArray);
    if (nameSet.size !== carNameArray.length) {
      throw new Error("[ERROR] 자동차 이름에 중복된 값이 있습니다.");
    }
  }
}

export default CarNameValidator;
