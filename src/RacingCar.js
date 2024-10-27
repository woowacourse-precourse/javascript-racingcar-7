import { MissionUtils } from '@woowacourse/mission-utils';

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

  getDistance() {
    return this.#dist;
  }

  getName() {
    return this.#name;
  }

  move() {
    if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) this.#dist++;
  }

  result() {
    return `${this.#name} : ${'-'.repeat(this.#dist)}`;
  }

}

export default RacingCar;