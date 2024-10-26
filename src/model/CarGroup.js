/**
 * 여러 자동차들을 그룹으로 관리하는 클래스
 * @class
 */
class CarGroup {
  /**
   * 자동차들의 배열
   * @type {Car[]}
   */
  cars;

  /**
   * CarGroup 클래스의 새로운 인스턴스를 생성
   * @param {Car[]} cars - 관리할 자동차 객체들의 배열
   */
  constructor(cars) {
    this.cars = cars;
  }

  /**
   * 그룹 내 모든 자동차들의 움직임을 실행
   * 각 자동차의 move() 메서드를 순차적으로 호출
   * @returns {Promise<void>} 모든 자동차의 이동이 완료됨을 나타내는 Promise
   * @async
   */
  async moveAllCars() {
    for (const car of this.cars) {
      car.move();
    }
  }
}

export default CarGroup;