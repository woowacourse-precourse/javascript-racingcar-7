import { VIEW_MSG } from "../Constants/Constants.js";
import { ViewUtils } from "../Util/ViewUtils.js";

//@ts-check

class View {
  async #inputCarName() {
    return await ViewUtils.input(VIEW_MSG.INPUT_CAR_NAME);
  }

  async #inputNumOfAttempts() {
    return await ViewUtils.input(VIEW_MSG.INPUT_NUM_OF_ATTEMPTS);
  }

  async inputInitialValue() {
    return await Promise.all(this.#inputCarName(), this.#inputNumOfAttempts());
  }

  /**
   * @typedef {Object} Car
   * @property {string} name - 자동차 이름
   * @property {number} distance - 이동 횟수 (출발점으로부터 거리)
   */

  /**
   * 자동차 객체로 이루어진 배열을 입력으로 받아 결과를 출력
   * @param {Car[]} cars - 자동차 객체 배열
   */
  outputResult(cars) {
    ViewUtils.output(VIEW_MSG.OUTPUT_RESULT);
    cars.map((car) => ViewUtils.output(`${car.name} : ${car.distance}`));
  }

  outputWinner(winnerNames) {
    ViewUtils.output(`${VIEW_MSG.OUTPUT_WINNER}${winnerNames.join(", ")}`);
  }
}

export default View;
