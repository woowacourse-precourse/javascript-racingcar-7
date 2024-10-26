import {
  hasDuplicate,
  isValidLength,
  isNotPositiveInteger,
  createErrorMessage,
  assertCondition,
  shouldAdvance,
  getAdvanceResult,
  executionLoop,
  getWinner,
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
    expect(() => assertCondition(false, errorMessage)).not.toThrow();
  });
});

describe("자동차가 전진 가능한지 체크합니다.", () => {
  test("랜덤 숫자가 4일 때는 전진 가능합니다.", () => {
    const randomNumber = 4;
    expect(shouldAdvance(randomNumber)).toBeTruthy();
  });

  test("랜덤 숫자가 3일 때는 전진할 수 없습니다.", () => {
    const randomNumber = 3;
    expect(shouldAdvance(randomNumber)).toBeFalsy();
  });
});

describe("각 자동차의 전진 카운트를 대시(-)로 변환해서 결과를 리턴합니다. ", () => {
  test("자동차 이름과 전진 횟수를 받아 대시로 변환하고, 결과를 줄바꿈으로 구분된 문자열로 반환한다.", () => {
    const carsInfoEntries = [
      ["a", 1],
      ["b", 2],
    ];
    const result = ["a : -", "b : --"].join("\n");
    expect(getAdvanceResult(carsInfoEntries)).toBe(result);
  });
});

describe("반복 횟수 만큼 실행 리스트에 있는 함수들을 실행합니다.", () => {
  test("주어진 횟수만큼 실행 목록의 함수들을 호출한다.", () => {
    const mockFunction1 = jest.fn();
    const mockFunction2 = jest.fn();
    const executionList = [mockFunction1, mockFunction2];
    executionLoop(3, executionList);

    // 각 함수가 3번씩 호출되었는지 확인
    expect(mockFunction1).toHaveBeenCalledTimes(3);
    expect(mockFunction2).toHaveBeenCalledTimes(3);
  });

  test("반복 횟수가 0이면 함수들이 호출되지 않는다.", () => {
    const mockFunction = jest.fn();
    executionLoop(0, [mockFunction]);

    expect(mockFunction).not.toHaveBeenCalled();
  });

  test("실행 순서가 올바른지 확인한다.", () => {
    const calls = [];
    const fn1 = jest.fn(() => calls.push("fn1"));
    const fn2 = jest.fn(() => calls.push("fn2"));
    executionLoop(2, [fn1, fn2]);

    expect(calls).toEqual(["fn1", "fn2", "fn1", "fn2"]);
  });
});

describe("전진 카운트가 가장 높은 자동차들을 문자열(우승자 형식)로 변환하여 리턴합니다.", () => {
  test("자동차 이름과 전진 횟수를 받아 대시로 변환하고, 결과를 줄바꿈으로 구분된 문자열로 반환한다.", () => {
    const advanceCounts = [2, 3, 3];
    const carsInfoEntries = [
      ["a", 2],
      ["b", 3],
      ["c", 3],
    ];
    const result = "b, c";
    expect(getWinner(advanceCounts, carsInfoEntries)).toBe(result);
  });
});
