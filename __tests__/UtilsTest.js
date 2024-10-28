import {
  checkDuplicateNames,
  checkNameLength,
  checkRaceCount,
} from "../src/errors/carsErrors";

describe("자동차 이름 확인", () => {
  test("5자 초과 이름 입력 시 에러 발생", () => {
    expect(() => checkNameLength(["pobi", "woni", "javaji"])).toThrow(
      "[ERROR]"
    );
  });

  test("중복 이름 입력 시 에러 발생", () => {
    expect(() => checkDuplicateNames(["pobi", "pobi", "woni"])).toThrow(
      "[ERROR]"
    );
  });
});

describe("게임 횟수 확인", () => {
  test("양의 정수 외의 값 입력 시 에러 발생", () => {
    expect(() => checkRaceCount("다섯번")).toThrow("[ERROR]");
  });
});
