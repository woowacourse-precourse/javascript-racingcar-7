const ERROR_BLANK = "[ERROR] : 공백은 입력될 수 없습니다.";
const ERROR_CAR_AMOUNT = "[ERROR] : 2대 이상의 자동차가 있어요 경주가 가능합니다.";
const ERROR_STRING_OVER_5 = "[ERROR] : 자동차 이름은 5자 이하만 가능합니다.";
const ERROR_DUPLICATE = "[ERROR] : 중복된 이름은 입력할 수 없습니다.";
const ERROR_INVALID_MOVE_COUNT = "[ERROR] : 1 이상의 시도 횟수를 입력해주세요.";
const ERROR_INVALID_INPUT_TYPE = "[ERROR] : 숫자를 입력해주세요.";


function throwError(message) {
  throw new Error(message);
}

export {
  ERROR_BLANK,
  ERROR_STRING_OVER_5,
  ERROR_CAR_AMOUNT,
  ERROR_DUPLICATE,
  
  ERROR_INVALID_MOVE_COUNT,
  ERROR_INVALID_INPUT_TYPE,
  throwError,
};
