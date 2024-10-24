import { isNameLongerThanFive } from "../src/utils/isNameLongerThanFive.js";

describe("isNameLongerThanFive 함수 테스트 : ", () => {
  test("이름의 길이가 5를 초과하는 경우 CAR_NAME_TOO_LONG 에러를 발생시킨다.", () => {
    expect(() =>
      isNameLongerThanFive(["subsub-e", "hiiiiiie", "+21@)"])
    ).toThrowError(
      "[ERROR] 이름이 너무 길어요. 자동차 이름은 5자 이하로 입력해주세요."
    );
  });

  test("이름의 길이가 5를 초과하는 경우 CAR_NAME_TOO_LONG 에러를 발생시킨다.", () => {
    expect(() =>
      isNameLongerThanFive(["이승섭입니다.", "하이요"])
    ).toThrowError(
      "[ERROR] 이름이 너무 길어요. 자동차 이름은 5자 이하로 입력해주세요."
    );
  });

  test("각 이름의 길이가 5자 이하이므로 에러를 발생시키지 않는다.", () => {
    expect(() =>
      isNameLongerThanFive(["이승섭이다", "하이요"])
    ).not.toThrowError();
  });
});
