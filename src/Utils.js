import { ERROR_MESSAGE, LOG_MESSAGE } from "./content.js";
import { Console } from "@woowacourse/mission-utils";

class Utils {
  async getCarName() {
    const input = await Console.readLineAsync(LOG_MESSAGE.START_MESSAGE);
    const carInput = input.split(",");
    this.carCountLimitCheck(carInput); //ttt
    return this.carNameLimitCheck(carInput);
  }

  async getTryNum() {
    //시도할 횟수 입력 받기
    const numInput = await Console.readLineAsync(LOG_MESSAGE.TRY_NUM_MESSAGE);
    this.checkTryNum(numInput);
    const tryNum = this.changeInt(numInput);
    this.limitingNum(tryNum);
    return tryNum;
  }

  carCountLimitCheck(carInput) {
    if (carInput.length > 5) {
      // 자동차 개수 체크 5이하만 가능
      throw new Error(ERROR_MESSAGE.LIMIT_COUNT_INCORRECT_VALUE);
    }
  }

  carNameLimitCheck(carInput) {
    //글자 수 제한
    let carName = {};
    for (let i = 0; i < carInput.length; i++) {
      if (carInput[i].length <= 5) {
        this.checkSpace(carInput[i]);
        this.duplicateCheck(carInput[i], carName);
        carName[carInput[i]] = 0;
      } else {
        throw new Error("[ERROR] 5자 이내로");
      }
    }
    return carName;
  }

  checkSpace(car) {
    // 공백 확인
    if (/\s/.test(car) || !car) {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    }
  }

  duplicateCheck(car, carName) {
    // 중복 검사
    if (car in carName) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_VALUE);
    }
  }

  checkTryNum(numInput) {
    // 시도 횟수 유효성 검사
    if (!/^[0-9]+$/.test(numInput)) {
      throw new Error(ERROR_MESSAGE.ONLY_INTGER);
    }
  }

  changeInt(numInput) {
    //숫자형으로 바꾸기
    return parseInt(numInput);
  }

  limitingNum(tryNum) {
    //최소, 최대 횟수 제한
    if (tryNum < 1 || tryNum > 10) {
      throw new Error(ERROR_MESSAGE.TRY_NUMBER_LIMIT);
    }
  }
}

export default Utils;
