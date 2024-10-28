import { validateCarName, validateAttemptCount } from '../../src/common/validators.js';
import { TAG } from '../../src/common/constants.js'

describe("validateCarName() 테스트", () => {
  test("자동차 이름은 5자 이하만 가능하다", () => {
    const input = "Ferrari,Mercedes,Audi,Porsche,BMW,LongNameCar";
    expect(() => validateCarName(input)).toThrow(TAG.ERROR);
  });

  test("자동차 이름이 존재해야 한다 (빈 문자열일 경우)", () => {
    const input = "";
    expect(() => validateCarName(input)).toThrow(TAG.ERROR);
  });

  test("자동차 이름은 중복되어서는 안된다", () => {
    const input = "BMW,Audi,BMW";
    expect(() => validateCarName(input)).toThrow(TAG.ERROR);
  });

  test("유효한 자동차 이름을 입력했을 때는 예외가 발생하지 않아야 한다", () => {
    const input = "Audi,BMW,Kia";
    expect(() => validateCarName(input)).not.toThrow();
  });
});

describe("validateAttemptCount() 테스트", () => {
  const INVALID_ATTEMPTS_COUNT_CASES = [
    "1e",
    "1234q",
    "0",
    "-1",
    "-100",
    "1.5",
    "3.14",
  ];

  test("시도할 횟수를 입력해야 한다 (빈 문자열일 경우)", () => {
    const input = "";
    expect(() => validateAttemptCount(input)).toThrow(TAG.ERROR);
  });

  test.each(INVALID_ATTEMPTS_COUNT_CASES)("시도 횟수에는 양의 정수값만 입력해야 한다", (input) => {
    expect(() => validateAttemptCount(input)).toThrow(TAG.ERROR);
  });
});
