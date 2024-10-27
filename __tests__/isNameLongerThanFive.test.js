import { isNameLongerThanFive } from "../src/validations/utils/isNameLongerThanFive.js";

describe("isNameLongerThanFive 함수 테스트 : ", () => {
  test.each([
    {
      description:
        "이름의 길이가 5를 초과하는 경우 CAR_NAME_TOO_LONG 에러를 발생시킨다.",
      input: ["subsub-e", "hiiiiiie", "+21@)"],
      expectedError:
        "[ERROR] 이름이 너무 길어요. 자동차 이름은 5자 이하로 입력해주세요.",
    },
    {
      description:
        "이름의 길이가 5를 초과하는 경우 CAR_NAME_TOO_LONG 에러를 발생시킨다.",
      input: ["이승섭입니다.", "하이요"],
      expectedError:
        "[ERROR] 이름이 너무 길어요. 자동차 이름은 5자 이하로 입력해주세요.",
    },
    {
      description: "각 이름의 길이가 5자 이하이므로 에러를 발생시키지 않는다.",
      input: ["이승섭이다", "하이요"],
      expectedError: null,
    },
  ])("$description", ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => isNameLongerThanFive(input)).toThrowError(expectedError);
    } else {
      expect(() => isNameLongerThanFive(input)).not.toThrowError();
    }
  });
});
