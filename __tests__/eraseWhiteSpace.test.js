import { eraseWhiteSpace } from "../src/utils/eraseWhiteSpace.js";

describe("eraseWhiteSpace 함수 테스트 : ", () => {
  test("빈 배열이 들어올 경우 빈 배열이 반환된다.", () => {
    expect(eraseWhiteSpace([""])).toEqual([""]);
  });

  test("공백이 포함 되지 않은 배열이 들어올 경우 그대로 반환된다.", () => {
    expect(eraseWhiteSpace(["이승섭", "하이요"])).toEqual(["이승섭", "하이요"]);
  });

  test("공백이 포함된 배열이 들어오면 공백을 제거하고 반환된다.", () => {
    expect(eraseWhiteSpace(["subsub-e", "  hiiiiiie", " +21@) "])).toEqual([
      "subsub-e",
      "hiiiiiie",
      "+21@)",
    ]);
  });
});
