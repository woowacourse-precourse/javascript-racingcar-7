import { isValidRound } from "../src/utils/isValidRound.js";

describe("isValidRound 함수 테스트 : ", () => {
  test("아무런 입력도 하지 않은 경우 EMPTY_INPUT_ROUND 에러를 발생시킨다.", () => {
    expect(() => isValidRound("")).toThrowError(
      "[ERROR] 숫자를 입력해 주세요. 빈 입력은 유효하지 않습니다."
    );
  });

  test("숫자를 입력하지 않은 경우 INVALID_ROUND_NUMBER 에러를 발생시킨다.", () => {
    expect(() => isValidRound("p")).toThrowError(
      "[ERROR] 유효하지 않은 시도 횟수입니다. 숫자만 입력해 주세요."
    );
  });

  test("숫자를 입력한 경우 에러를 발생시키지 않는다.", () => {
    expect(() => isValidRound("5")).not.toThrowError();
  });
});
