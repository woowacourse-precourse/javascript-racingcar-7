import { Random } from '@woowacourse/mission-utils';

/**
 * 자동차 경주 게임에서 사용되는 자동차를 표현하는 클래스
 * @class
 */
class Car {
  /**
   * 자동차의 이름
   * @type {string}
   */
  name;

  /**
   * 자동차의 현재 위치
   * @type {number}
   */
  position;

  /**
   * Car 클래스의 새로운 인스턴스를 생성
   * @param {string} name - 자동차의 이름
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**
   * 무작위 값을 기반으로 자동차를 전진
   * 0-9 사이의 무작위 값이 4 이상일 경우 자동차가 한 칸 전진
   * @returns {void}
   */
  move() {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }
}

export default Car;