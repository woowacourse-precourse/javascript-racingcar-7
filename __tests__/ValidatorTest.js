import { Validator } from "../src/utils/Validator.js";
import { NUMBER } from "../src/utils/constants.js";

describe("자동차 이름 유효성 검사 테스트", () => {
  test(`자동차 이름이 ${NUMBER.CAR_NAME_MIN}글자 미만일 경우 에러 발생`, () => {
    const input = [["도", "", "에", "몽"], [""]];

    input.forEach((names) => {
      expect(() => Validator.carNameLength(names)).toThrow(Error);
    });
  });

  test(`자동차 이름이 ${NUMBER.CAR_NAME_MAX}글자를 초과할 경우 에러 발생`, () => {
    expect(() => Validator.carNameLength(["도라에몽몽몽", "수연"])).toThrow(
      Error
    );
  });

  test(`자동차 이름이 중복 된 경우 에러 발생`, () => {
    expect(() => Validator.carNameSame(["수연", "수연", "도라에몽몽"])).toThrow(
      Error
    );
  });
});

describe("시도 횟수 유효성 검사 테스트", () => {
  test(`정수가 아닐 경우 에러 발생`, () => {
    const input = ["안뇽", 1.5];

    input.forEach((count) => {
      expect(() => Validator.isNumber(count)).toThrow(Error);
    });
  });

  test(`${NUMBER.ATTEMPT_MIN} 미만인 경우 에러 발생`, () => {
    const input = [0, -1];

    input.forEach((count) => {
      expect(() => Validator.attemptMin(count)).toThrow(Error);
    });
  });
});
