import { getMaxForwards } from "../src/features/getMaxForwards.js";
import { MESSAGES } from "../src/config/config.js";

describe("getMaxForwards 테스트", () => {
  test.each([
    {
      description: "가장 많이 이동한 자동차가 한 개일 경우",
      carList: [
        { name: "pobi", forwardCount: 3 },
        { name: "woni", forwardCount: 1 },
        { name: "jun", forwardCount: 2 }
      ],
      expectedResult: ["pobi"],
    },
    {
      description: "가장 많이 이동한 자동차가 여러 개일 경우",
      carList: [
        { name: "pobi", forwardCount: 3 },
        { name: "woni", forwardCount: 3 },
        { name: "jun", forwardCount: 2 }
      ],
      expectedResult: ["pobi", "woni"],
    },
    {
      description: "모든 자동차의 이동 횟수가 0일 경우",
      carList: [
        { name: "pobi", forwardCount: 0 },
        { name: "woni", forwardCount: 0 },
        { name: "jun", forwardCount: 0 }
      ],
      expectedResult: ["pobi", "woni", "jun"],
    }
  ])("$description", ({ carList, expectedResult }) => {
    expect(getMaxForwards(carList)).toEqual(expectedResult);
  });

  test("입력값이 없을 경우 에러를 발생시키는 지 확인", () => {
    expect(() => getMaxForwards([])).toThrow(MESSAGES.ERROR_INPUT_EMPTY);
  });
});