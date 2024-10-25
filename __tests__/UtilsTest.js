import { pickNumberInRange } from "../src/lib/utils";

describe("pickNumberInRange", () => {
  test("a부터 b사이의 수를 리턴한다. ", () => {
    for (let i = 0; i < 100; i++) {
      const num = pickNumberInRange(0, 9);
      console.log(num);
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThanOrEqual(9);
    }
  });
});
