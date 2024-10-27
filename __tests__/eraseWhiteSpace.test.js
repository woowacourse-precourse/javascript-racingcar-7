import { eraseWhiteSpace } from "../src/validations/utils/eraseWhiteSpace.js";

describe("eraseWhiteSpace 함수 테스트 : ", () => {
  test.each([
    {
      description: "빈 배열이 들어올 경우 빈 배열이 반환된다.",
      input: [""],
      expected: [""],
    },
    {
      description: "공백이 포함 되지 않은 배열이 들어올 경우 그대로 반환된다.",
      input: ["이승섭", "하이요"],
      expected: ["이승섭", "하이요"],
    },
    {
      description: "공백이 포함된 배열이 들어오면 공백을 제거하고 반환된다.",
      input: ["subsub-e", "  hiiiiiie", " +21@) "],
      expected: ["subsub-e", "hiiiiiie", "+21@)"],
    },
  ])("$description", ({ input, expected }) => {
    expect(eraseWhiteSpace(input)).toEqual(expected);
  });
});
