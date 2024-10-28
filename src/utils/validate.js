import { Console } from "@woowacourse/mission-utils";

const validateCommaInLastArray = (isComma) => {
  const extractArrayFromCarName = isComma.split(/,/).map((carName) => {
    return carName.length;
  });

  if (extractArrayFromCarName[extractArrayFromCarName.length - 1] === 0) {
    return true;
  } else {
    return false;
  }
};

const validateLimitStringLength = (isOverLength) => {
  const limitLength = isOverLength.split(/,/).map((carName) => {
    return carName.length;
  });
  const hasGreaterThenFive = limitLength.some((carNameLength) => {
    return carNameLength > 5;
  });
  return hasGreaterThenFive;
};

const validateInputCarNames = (inputCarNames) => {
  const isCommaLastPosition = validateCommaInLastArray(inputCarNames);
  const isLimitLength = validateLimitStringLength(inputCarNames);

  if (inputCarNames == "") {
    inputCarNames = "";
    Console.print("[ERROR] 입력값이 없습니다. 다시 입력해주세요.");
  } else if (inputCarNames === null || inputCarNames === undefined) {
    inputCarNames = "";
    Console.print("[ERROR] 에러가 발생하였습니다. 정상값을 다시 입력해주세요.");
  } else if (/[^\da-zA-Z,]/.test(inputCarNames)) {
    inputCarNames = "";
    Console.print(
      "[ERROR] 자동차의 영어이름과 콤마(,)만 입력될 수 있습니다. 다시 입력해주세요."
    );
  } else if (inputCarNames.startsWith(",")) {
    inputCarNames = "";
    Console.print("[ERROR] 콤마(,)가 먼저 입력될 수 없습니다. ");
  } else if (isCommaLastPosition) {
    inputCarNames = "";
    Console.print("[ERROR] 콤마(,)가 마지막으로 끝날 수 없습니다.");
  } else if (isLimitLength) {
    inputCarNames = "";
    Console.print(
      "[ERROR] 입력하신 자동차 이름 중 5글자가 넘어가는 이름이 존재합니다. 다시 입력해주세요."
    );
  } else {
    return true;
  }
};

const validateInputTryNum = (inputTryCount) => {
  if (inputTryCount == "") {
    inputTryCount = "";
    Console.print("[ERROR] 값이 없습니다. 다시 입력해주세요.");
  } else if (isNaN(inputTryCount) || !/^\d+$/.test(inputTryCount)) {
    inputTryCount = "";
    Console.print("[ERROR] 숫자가 아닙니다. 다시 입력해주세요");
  } else if (inputTryCount > 20) {
    inputTryCount = "";
    Console.print("[ERROR] 과도한 숫자를 입력하셨습니다. 다시 입력해주세요.");
  } else {
    return true;
  }
};

export { validateInputCarNames, validateInputTryNum };