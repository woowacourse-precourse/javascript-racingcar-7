class RacingCar {
  #name;
  #dist = 0;
  constructor(name) {
    this.#name = this.#validateName(name);
  }

  #validateName(name) {
    if (name.length === 0 || name.length > 5) throw new Error("[Error] 유효한 자동차 이름이 아닙니다.");
    return name;
  }


}

export default RacingCar;