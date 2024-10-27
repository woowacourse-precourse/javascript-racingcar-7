import { isInputEmpty } from "../src/validations/utils/isInputEmpty.js";

describe("isInputEmpty 함수 테스트 : ", () => {
  test.each([
    {
      description: "빈 배열이 들어올 경우 EMPTY_INPUT_NAME 에러를 발생시킨다.",
      input: [""],
      expectedError:
        "[ERROR] 빈 문자열은 유효하지 않습니다. 자동차 이름을 입력해주세요.",
    },
    {
      description:
        "배열 중간에 빈 문자열이 들어올 경우 EMPTY_INPUT_NAME 에러를 발생시킨다.",
      input: ["sub", "", "hi"],
      expectedError:
        "[ERROR] 빈 문자열은 유효하지 않습니다. 자동차 이름을 입력해주세요.",
    },
    {
      description: "빈 배열이 아니므로 에러를 발생시키지 않는다.",
      input: ["subsub-e", "hiiiiiie", "+21@)"],
      expectedError: null,
    },
  ])("$description", ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => isInputEmpty(input)).toThrowError(expectedError);
    } else {
      expect(() => isInputEmpty(input)).not.toThrowError();
    }
  });
});
