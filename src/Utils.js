import { ERROR_MESSAGE } from "./content.js";
class Utils {
  constructor(carInput) {
    this.carInput = new carInput();
  }
  carCountLimitCheck(carInput) {
    if (carInput.lenght < 5) {
      // 자동차 개수 체크 5이하만 가능
      checkSpace(carInput);
    } else {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    }
  }

  checkSpace(carInput) {
    // 공백 확인
    if (/\s/.test(carInput) === false) {
      duplicateCheck();
    } else {
      throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
    }
  }
  duplicateCheck() {
    // 중복 검사
  }
}
// export default Utils;
export { carCountLimitCheck };
