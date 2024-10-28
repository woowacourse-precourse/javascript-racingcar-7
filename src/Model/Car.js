import { Random } from '@woowacourse/mission-utils';
import { throwError, ERROR_MESSAGES } from './Error.js';
import CAR_SETTINGS from '../Config/SettingValues.js';

/**
 * Car 클래스는 자동차 객체를 나타내며, 자동차의 이름, 위치, 이동 여부 등을 관리합니다.
 */
export default class Car {
  #carName;

  #position;

  /**
   * Car 인스턴스를 생성합니다.
   * @param {string} carName - 자동차의 이름입니다.
   * @throws {Error} 자동차 이름이 문자열이 아닌 경우 오류를 발생시킵니다.
   */
  constructor(carName) {
    if (typeof carName !== 'string') {
      throwError(ERROR_MESSAGES.INVALID_NAME);
    }
    this.#carName = carName;
    this.#position = 0;
  }

  /**
   * 자동차의 이름을 반환합니다.
   * @returns {string} 자동차의 이름입니다.
   */
  get carName() {
    return this.#carName;
  }

  /**
   * 자동차의 현재 위치를 반환합니다.
   * @returns {number} 자동차의 현재 위치입니다.
   */
  get position() {
    return this.#position;
  }

  /**
   * 자동차의 위치를 1 증가시킵니다.
   * @private
   */
  #moveForward() {
    this.#position += 1;
  }

  /**
   * 자동차가 이동할 수 있는지 여부를 결정합니다.
   * 설정된 최소 이동 임계값보다 랜덤 값이 크거나 같으면 `true`를 반환합니다.
   * @private
   * @returns {boolean} 자동차가 이동할 수 있으면 `true`, 그렇지 않으면 `false`를 반환합니다.
   */
  #shouldMove() {
    const randomValue = Random.pickNumberInRange(
      CAR_SETTINGS.MIN_RANDOM_VALUE,
      CAR_SETTINGS.MAX_RANDOM_VALUE,
    );
    return randomValue >= CAR_SETTINGS.MIN_MOVE_THRESHOLD;
  }

  /**
   * 자동차가 이동할 수 있는 경우, 위치를 1 증가시킵니다.
   */
  tryMove() {
    if (this.#shouldMove()) {
      this.#moveForward();
    }
  }

  /**
   * 자동차의 현재 위치를 '-' 문자를 사용해 문자열로 반환합니다.
   * @private
   * @returns {string} 현재 위치를 나타내는 문자열입니다.
   */
  #getPositionString() {
    return '-'.repeat(this.#position);
  }

  /**
   * 자동차의 이름과 위치를 문자열 형태로 반환합니다.
   * @returns {string} 자동차의 이름과 위치를 포함한 문자열입니다.
   * @example
   * const car = new Car('pobi');
   * car.toString(); // "pobi : ---"
   */
  toString() {
    return `${this.#carName} : ${this.#getPositionString()}`;
  }
}
