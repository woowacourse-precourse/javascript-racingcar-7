import {
  ERROR_MESSAGE_NOT_INTEGER,
  ERROR_MESSAGE_NOT_NUMBER,
  ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
} from "../src/lib/constants";
import {
  checkArrayAllUnique,
  getIsNumeric,
  getKeyArrayHasTargetValueInMap,
  getMapFilledZero,
  getMaxValueInMap,
  getRepeatedString,
  pickNumberInRange,
  splitIntoArray,
  validatePositiveInteger,
} from "../src/lib/utils";

describe("유틸 함수", () => {
  describe("pickNumberInRange", () => {
    test("a부터 b사이의 수를 리턴한다.", () => {
      for (let i = 0; i < 100; i++) {
        const num = pickNumberInRange(0, 9);
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(9);
      }
    });
  });

  describe("splitIntoArray", () => {
    test(".으로 분리한 배열을 리턴한다.", () => {
      const result = splitIntoArray("a.b.c.d.e", ".");
      expect(result).toEqual(["a", "b", "c", "d", "e"]);
    });
  });

  describe("validatePositiveInteger", () => {
    test("숫자가 아닐 경우 에러를 출력한다.", async () => {
      await expect(() => {
        validatePositiveInteger("a");
      }).toThrow(ERROR_MESSAGE_NOT_NUMBER);
    });
    test("양수가 아닐 경우 에러를 출력한다.", async () => {
      await expect(() => {
        validatePositiveInteger(0);
      }).toThrow(ERROR_MESSAGE_NOT_POSITIVE_POSITIVE);
    });
    test("정수가 아닐 경우 에러를 출력한다.", async () => {
      await expect(() => {
        validatePositiveInteger(1.1);
      }).toThrow(ERROR_MESSAGE_NOT_INTEGER);
    });
    test("양의 정수인 경우 아무것도 출력하지 않는다.", () => {
      expect(validatePositiveInteger(2)).toBeUndefined();
    });
  });

  describe("getIsNumeric", () => {
    test("숫자가 아닌 경우 false를 리턴한다.", () => {
      expect(getIsNumeric("a")).toBe(false);
      expect(getIsNumeric([])).toBe(false);
      expect(getIsNumeric([1, 2, 3])).toBe(false);
      expect(getIsNumeric({})).toBe(false);
      expect(getIsNumeric(undefined)).toBe(false);
      expect(getIsNumeric(null)).toBe(false);
      expect(getIsNumeric(NaN)).toBe(false);
    });
    test("숫자인 경우 true를 리턴한다.", () => {
      expect(getIsNumeric(0)).toBe(true);
      expect(getIsNumeric(9999999)).toBe(true);
      expect(getIsNumeric(5.5)).toBe(true);
      expect(getIsNumeric(-99999)).toBe(true);
    });
  });

  describe("getMapFilledZero", () => {
    test("주어진 배열의 인자로 접근할 경우 0을 반환한다.", () => {
      const mapFilledZero = getMapFilledZero(["a", "b", "c"]);
      expect(mapFilledZero.get("a")).toBe(0);
      expect(mapFilledZero.get("b")).toBe(0);
      expect(mapFilledZero.get("c")).toBe(0);
    });
    test("주어진 배열의 인자가 아닌 값으로 접근할 경우 undefined를 반환한다.", () => {
      const mapFilledZero = getMapFilledZero(["a", "b", "c"]);
      expect(mapFilledZero.get("d")).toBeUndefined();
    });
  });

  describe("getRepeatedString", () => {
    test("주어진 인자의 문자를 숫자만큼 반복한다.", () => {
      expect(getRepeatedString("-", 10)).toBe("----------");
      expect(getRepeatedString("-", 0)).toBe("");
    });
  });

  describe("getMaxValueInMap", () => {
    test("Map에서 가장 큰 값을 반환한다.", () => {
      expect(
        getMaxValueInMap(
          new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3],
          ])
        )
      ).toBe(3);

      expect(
        getMaxValueInMap(
          new Map([
            ["a", 1],
            ["b", 1],
            ["c", 1],
          ])
        )
      ).toBe(1);
    });
  });

  describe("getKeyArrayHasTargetValueInMap", () => {
    test("Map에서 원하는 값을 가지고 있는 key배열을 얻는다.", () => {
      expect(
        getKeyArrayHasTargetValueInMap(
          new Map([
            ["a", 1],
            ["b", 2],
            ["c", 3],
          ]),
          1
        )
      ).toEqual(["a"]);
    });
  });

  describe("checkArrayAllUnique", () => {
    test("중복되는 값이 없을 경우 true롤 반환한다.", () => {
      expect(checkArrayAllUnique(["a", "b", "c"])).toBe(true);
    });

    test("중복되는 값이 있을 경우 false롤 반환한다.", () => {
      expect(checkArrayAllUnique(["a", "a", "c"])).toBe(false);
    });
  });
});
