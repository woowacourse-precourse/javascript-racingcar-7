/**
 * 자동차를 나타내는 클래스
 *
 * @class Car
 */
export default class Car {
  /**
   * @constructor
   * @param {string} name - 자동차 이름
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**
   * 자동차를 한 칸 전진시킨다.
   */
  move() {
    this.position += 1;
  }

  /**
   * 자동차의 이름을 반환한다.
   *
   * @returns {string} 자동차 이름
   */
  getCarName() {
    return this.name;
  }

  /**
   * 자동차의 현재 위치를 반환한다.
   *
   * @returns {number} 자동차 위치
   */
  getPosition() {
    return this.position;
  }
}
