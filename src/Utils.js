import { ERROR_MESSAGE } from "./content.js";
class Utils {
  constructor(carInput) {
    this.carInput = new carInput();
  }
}
export function carCountLimitCheck(carInput) {
  if (carInput.length < 5) {
    // 자동차 개수 체크 5이하만 가능
    checkSpace(carInput);
  } else {
    throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
  }
}

function checkSpace(carInput) {
  // 공백 확인
  if (/\s/.test(carInput) || carInput.includes("")) {
    throw new Error(ERROR_MESSAGE.INCORRECT_VALUE);
  } else {
    duplicateCheck(carInput);
  }
}
export function duplicateCheck(carInput) {
  // 중복 검사
  const carName = {};
  for (const i of carInput) {
    if (i in carName) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_VALUE);
    } else {
      carName[i] = "";
    }
  }
}
// }
export default Utils;
