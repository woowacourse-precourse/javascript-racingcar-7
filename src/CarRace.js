import OutputView from './view/OutputView.js';

/**
 * 자동차 경주 게임을 진행하는 클래스
 * @class
 */
class CarRace {
  /**
   * 경주에 참여하는 자동차들의 그룹
   * @type {CarGroup}
   * @private
   */
  cars;

  /**
   * CarRace 클래스의 새로운 인스턴스를 생성
   * @param {CarGroup} cars - 경주에 참여할 자동차들의 그룹
   */
  constructor(cars) {
    this.cars = cars
  }

  /**
   * 자동차 경주를 시작하고 진행
   * 지정된 시도 횟수만큼 모든 자동차를 이동시키고 각 라운드의 결과를 출력
   * @param {number} attemptsInput - 경주를 진행할 라운드 수
   * @returns {Promise<void>}
   * @async
   * @example
   * const race = new CarRace(carGroup);
   * await race.start(3); // 3라운드 진행
   * // 출력:
   * // 실행 결과
   * // car1 : --
   * // car2 : -
   * // ...
   */
  async start(attemptsInput) {
    OutputView.printRaceResult();
    for (let i = 0; i < attemptsInput; i++) {
      await this.cars.moveAllCars();
      OutputView.printCurrentRace(this.cars);
    }
  }
}

export default CarRace;