import Validator from "../src/utils/Validator";

describe("Validator 클래스 테스트", () => {
  test("이름이 5자를 초과하면 에러 발생", () => {
    expect(() => Validator.validateCarName("javajigi")).toThrow("[ERROR]");
  });

  test("이름이 공백이면 에러 발생", () => {
    expect(() => Validator.validateCarName("")).toThrow("[ERROR]");
  });

  test("이름이 공백 문자로만 이루어진 경우 에러 발생", () => {
    expect(() => Validator.validateCarName("  ")).toThrow("[ERROR]");
  });

  test("중복된 이름이 있으면 에러 발생", () => {
    expect(() => Validator.validateDuplicateCarName(["pobi", "pobi"])).toThrow(
      "[ERROR]"
    );
  });

  test("유효한 시도 횟수 입력", () => {
    expect(Validator.validateTryCount("5")).toBe(5);
  });

  test("시도 횟수가 0이하일 경우 에러 발생", () => {
    expect(() => {
      Validator.validateTryCount("-1");
    }).toThrow("[ERROR]");
  });

  test("시도 횟수가 숫자가 아닐 경우 에러 발생", () => {
    expect(() => {
      Validator.validateTryCount("lolol");
    }).toThrow("[ERROR]");
  });
});
