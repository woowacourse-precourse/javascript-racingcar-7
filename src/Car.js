// src/Car.js
import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * Car class : 자동차의 이름과 현재 위치를 저장 및 관리
 */
class Car {
  /**
   * @param {string} name - 자동차의 이름
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  /**
   * 랜덤 숫자를 생성하여 4 이상일 경우 전진
   */
  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  /**
   * 현재 위치를 '-' 문자열로 반환
   * @returns {string} 현재 위치를 나타내는 문자열
   */
  getPosition() {
    return '-'.repeat(this.position);
  }
}

export default Car;
