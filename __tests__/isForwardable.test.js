import { isForwardable } from "../src/features/isForwardable";
import { Random } from "@woowacourse/mission-utils";

describe("isForwardable 테스트", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // 각 테스트 후 원래 상태로 복원
  });

  test("숫자가 9일 때 true를 반환하는 지 확인", () => {
    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(9);
    expect(isForwardable()).toBe(true);
  });

  test("숫자가 4 이상일 때 true를 반환하는 지 확인", () => {
    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);
    expect(isForwardable()).toBe(true);
  });

  test("숫자가 4 미만일 때 false를 반환하는 지 확인", () => {
    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(3);
    expect(isForwardable()).toBe(false);
  });

  test("숫자가 0일 때 false를 반환하는 지 확인", () => {
    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(0);
    expect(isForwardable()).toBe(false);
  });
});
