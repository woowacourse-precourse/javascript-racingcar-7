/**
 * 자동차 객체를 생성하는 팩토리 클래스
 * @class
 */
import Car from '../model/Car.js';
import Extractor from '../utils/Extractor.js';
import CarGroup from '../model/CarGroup.js';

class CarFactory {
  /**
   * 단일 레이싱 카 객체를 생성
   * @param {string} name - 생성할 자동차의 이름
   * @returns {Car} 생성된 자동차 객체
   * @static
   */
  static createRacingCar(name) {
    return new Car(name);
  }

  /**
   * 여러 개의 레이싱 카 객체를 생성하여 그룹으로 반환
   * @param {string[]} names - 생성할 자동차들의 이름 배열
   * @returns {CarGroup} 생성된 자동차들을 포함하는 그룹 객체
   * @static
   */
  static createBulkRacingCar(names) {
    const cars = names.map(name => this.createRacingCar(name));
    return new CarGroup(cars)
  }

  /**
   * 일반 텍스트에서 중복되지 않는 이름을 추출하여 자동차 그룹을 생성
   * @param {string} plainText - 자동차 이름들이 포함된 일반 텍스트
   * @returns {CarGroup} 생성된 자동차들을 포함하는 그룹 객체
   * @static
   * @throws {Error} 텍스트 파싱 중 오류가 발생할 경우
   */
  static createBulkRacingCarFromPlainText(plainText) {
    const names = Extractor.extractName(plainText);
    return this.createBulkRacingCar(names);
  }
}

export default CarFactory;