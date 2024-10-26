import { Console } from "@woowacourse/mission-utils"

/**
 * 자동차 경주 게임의 결과를 출력하는 뷰 클래스
 * @class
 */
class OutputView {
  /**
   * 경주 결과 시작 문구를 출력
   * @returns {void}
   */
  static printRaceResult() {
    Console.print("\n실행 결과");
  }

  /**
   * 각 자동차의 현재 위치를 시각적으로 출력
   * 자동차의 위치는 '-' 문자의 반복으로 표현
   * @param {Object} param0 - 자동차들의 정보를 담은 객체
   * @param {Array<{name: string, position: number}>} param0.cars - 자동차 객체들의 배열
   * @returns {void}
   * @example
   * OutputView.printCurrentRace({
   *   cars: [
   *     { name: "pobi", position: 3 },
   *     { name: "woni", position: 2 }
   *   ]
   * })
   * // 출력:
   * // pobi : ---
   * // woni : --
   */
  static printCurrentRace({ cars }) {
    cars.forEach(({ name, position }) => {
      Console.print(`${name} : ${"-".repeat(position)}`);
    })
    Console.print("");
  }

  /**
   * 경주의 최종 우승자 출력
   * 동일한 위치에 있는 자동차들이 있다면 공동 우승으로 처리
   * @param {Object} param0 - 자동차들의 정보를 담은 객체
   * @param {Array<{name: string, position: number}>} param0.cars - 자동차 객체들의 배열
   * @returns {void}
   * @example
   * OutputView.printWinner({
   *   cars: [
   *     { name: "pobi", position: 3 },
   *     { name: "woni", position: 3 },
   *     { name: "jun", position: 2 }
   *   ]
   * })
   * // 출력: 최종 우승자 : pobi, woni
   */
  static printWinner({ cars }) {
    const maxPosition = Math.max(...cars.map(car => car.position));
    const winners = cars
    .filter(car => car.position === maxPosition)
    .map(car => car.name)
    .join(", ");
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default OutputView;