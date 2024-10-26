import {
  hasDuplicate,
  isValidLength,
  isNotPositiveInteger,
  createErrorMessage,
  assertCondition,
} from "../src/utils/index.js";

describe("배열의 중복을 체크한다.", () => {
  test("['a', 'b', 'a']는 중복 있으므로 true를 반환합니다.", () => {
    const array = ["a", "b", "a"];
    expect(hasDuplicate(array)).toBeTruthy();
  });

  test("['a', 'b']는 중복 없으므로 false를 반환합니다.", () => {
    const array = ["a", "b"];
    expect(hasDuplicate(array)).toBeFalsy();
  });
});

describe("길이를 체크한다.", () => {
  const minLength = 1;
  const maxLength = 5;

  test("'abc'의 길이는 허용 범위 내에 있어 true를 반환합니다.", () => {
    const target = "abc";
    expect(isValidLength(target, minLength, maxLength)).toBeTruthy();
  });

  test("'abcdef'의 길이는 허용 범위 밖에 있어 false를 반환합니다.", () => {
    const target = "abcdef";
    expect(isValidLength(target, minLength, maxLength)).toBeFalsy();
  });
});

describe("양의 정수를 체크한다.", () => {
  test("0과 1.1은 양의 정수가 아니므로 true를 반환합니다.", () => {
    const target1 = 0; // 양수X
    const target2 = 1.1; // 정수X
    expect(isNotPositiveInteger(target1)).toBeTruthy();
    expect(isNotPositiveInteger(target2)).toBeTruthy();
  });

  test("1은 양의 정수이므로 false를 반환합니다.", () => {
    const target = 1;
    expect(isNotPositiveInteger(target)).toBeFalsy();
  });
});

describe("에러 메세지를 생성한다.", () => {
  test("기본 메세지에 [Error] 접두사를 추가하여 반환합니다.", () => {
    const message = "에러 메세지입니다.";
    expect(createErrorMessage(message)).toBe("[ERROR] 에러 메세지입니다.");
  });
});

describe("조건에 따라 에러 메세지와 함께 예외 처리를 발생시킵니다.", () => {
  const errorMessage = "[ERROR] 에러 메세지입니다.";

  test("조건이 true이므로 에러 메세지와 함께 예외 처리를 합니다.", () => {
    expect(() => assertCondition(true, errorMessage)).toThrow(errorMessage);
  });

  test("조건이 false이므로 예외 처리가 발생하지 않습니다.", () => {
    expect(() => assertCondition(false, errorMessage)).not.toThrow(errorMessage);
  });
});
