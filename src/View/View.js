import { VIEW_MSG } from "../Constant/Constants.js";
import { Car } from "../Model/Car.js";
import { ParseUtils } from "../Util/ParseUtils.js";
import { ViewUtils } from "../Util/ViewUtils.js";
import { Validator } from "../Validator/Validator.js";

//@ts-check

class View {
  #validator;

  constructor() {
    this.#validator = Validator();
  }

  async #inputCarName() {
    const carNames = await ViewUtils.input(VIEW_MSG.INPUT_CAR_NAME);
    this.#validator.validateInputCarNameFormat(carNames);
    return carNames;
  }

  async #inputNumOfAttempts() {
    const attempts = await ViewUtils.input(VIEW_MSG.INPUT_NUM_OF_ATTEMPTS);
    this.#validator.validateInputNumOfAttempts(attempts);
    return attempts;
  }

  /**
   * 사용자 인풋(자동차 이름, 시도 횟수)를 받아서 객체로 반환
   * @returns {Promise<{{carNames : string, numOfAttempts : number}}>}
   */
  async inputInitialValue() {
    const carNames = await this.#inputCarName();
    const numOfAttempts = await this.#inputNumOfAttempts();
    return { carNames, numOfAttempts };
  }

  /**
   * 자동차 객체로 이루어진 배열을 입력으로 받아 결과를 출력
   * @param {Car[]} cars - 자동차 객체 배열
   */
  outputResult(cars) {
    ViewUtils.output(VIEW_MSG.OUTPUT_RESULT);
    cars.map((car) =>
      ViewUtils.output(
        `${car.getName()} : ${ParseUtils.parseDistanceToDash(
          car.getDistance()
        )}`
      )
    );
    ViewUtils.output("");
  }

  outputWinner(winnerNames) {
    ViewUtils.output(`${VIEW_MSG.OUTPUT_WINNER}${winnerNames.join(", ")}`);
  }
}

export default View;
