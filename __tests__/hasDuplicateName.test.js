import { hasDuplicateName } from "../src/validations/utils/hasDuplicateName.js";

describe("hasDuplicateName 함수 테스트 : ", () => {
  test("중복된 이름이 있는 경우 DUPLICATE_NAME 에러를 발생시킨다.", () => {
    expect(() => hasDuplicateName(["subsub-e", "subsub-e"])).toThrowError(
      "[ERROR] 중복된 이름이 있어요. 각 자동차의 이름은 고유해야 합니다."
    );
  });

  test("중복된 이름이 없는 경우 에러를 발생시키지 않는다.", () => {
    expect(() =>
      hasDuplicateName(["subsub-e", "hiiiiiie", "+21@)"])
    ).not.toThrowError();
  });
});
