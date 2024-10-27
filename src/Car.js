import { Random, Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**
   * 자동차가 전진할지를 결정, 무작위 값이 4 이상일 때만 위치를 증가
   */
  move() {
    const randomValue = Random.pickNumberInRange(0, 9);

    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  /**
   * 현재 위치 반환
   * @returns {Number} 현재 위치
   */
  getPosition() {
    return this.position;
  }

  /**
   * 자동차 이름 반환
   * @returns {String} 차 이름
   */
  getName() {
    return this.name;
  }
}

export default Car;
