import { CAR_NAME } from "../src/constants/error";
import { carNameValidator } from "../src/validation/carNameValidator";

describe("자동차 경주 carNameValidator", () => {
  test("자동차 이름이 비어있을 경우", () => {
    const result = carNameValidator("");
    expect(result.result).toBe(false);
    expect(result.message).toBe(CAR_NAME.EMPTY);
  });

  test("자동차 이름이 쉼표로 끝날 경우", () => {
    const result = carNameValidator("pobi,woni,");
    expect(result.result).toBe(false);
    expect(result.message).toBe(CAR_NAME.EMPTY);
  });

  test("자동차 이름에 두 개의 쉼표가 연속으로 있을 경우", () => {
    const result = carNameValidator("pobi,,woni");
    expect(result.result).toBe(false);
    expect(result.message).toBe(CAR_NAME.DOUBLE_COMMA);
  });

  test("자동차 이름에 특수 문자가 포함되어 있을 경우", () => {
    const result = carNameValidator("pobi@woni");
    expect(result.result).toBe(false);
    expect(result.message).toBe(CAR_NAME.SPECIAL_CHAR);
  });

  test("자동차 이름에 중복된 이름이 있을 경우", () => {
    const result = carNameValidator("pobi,woni,pobi");
    expect(result.result).toBe(false);
    expect(result.message).toBe(CAR_NAME.DUPLICATE);
  });

  test("자동차 이름 길이가 유효하지 않을 경우", () => {
    const longName = "a".repeat(CAR_NAME.MAX + 1);
    const result = carNameValidator(longName);
    expect(result.result).toBe(false);
    expect(result.message).toBe(CAR_NAME.MAX_LENGTH);
  });

  test("모든 조건을 만족하는 유효한 자동차 이름", () => {
    const result = carNameValidator("pobi,woni");
    expect(result.result).toBe(true);
    expect(result.names).toEqual(["pobi", "woni"]);
  });
});
