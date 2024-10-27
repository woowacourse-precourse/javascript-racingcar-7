import { extractCarName } from "../src/validations/utils/extractCarName";

describe("extractCarName 함수 테스트 : ", () => {
  test.each([
    {
      description: "빈 문자열 입력할 경우 빈 문자열이 반환된다.",
      input: "",
      expected: [""],
    },
    {
      description: "콤마만 입력할 경우 빈 문자열이 반환된다.",
      input: ",",
      expected: ["", ""],
    },
    {
      description:
        "문장 사이에 콤마가 2개 이상 연속으로 나오는 경우 중간에 비어 있는 이름이 반환된다.",
      input: "sub,,hi",
      expected: ["sub", "", "hi"],
    },
    {
      description: "한 개의 이름을 입력할 경우 한 개의 이름이 반환된다.",
      input: "sub",
      expected: ["sub"],
    },
    {
      description:
        "공백이나 특수문자가 포함된 이름을 입력해도 해당 이름이 그대로 반환된다.",
      input: "subsub-e,  hiiiiiie, +21@) ",
      expected: ["subsub-e", "  hiiiiiie", " +21@) "],
    },
  ])("$description", ({ input, expected }) => {
    expect(extractCarName(input)).toEqual(expected);
  });
});
