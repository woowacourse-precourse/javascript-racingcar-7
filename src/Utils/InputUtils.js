import { Console } from "@woowacourse/mission-utils";
import InputValidator from "../validator/InputValidator.js";

export default class InputUtils {
  
  static async inputCarNames() {
    return await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  }

  static async getCarNameList() {
    const carNames = await this.inputCarNames();
    return carNames.split(',');
  }

  static async inputTryNumber() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  static async getTryNumber() {
    return Number(await this.inputTryNumber());
  }

  static async validateCarNameList() {
    return InputValidator.carValidatior(await this.getCarNameList());
  }

  static async validateTryNumber() {
    return InputValidator.tryNumberValidator(await this.getTryNumber());
  }
}