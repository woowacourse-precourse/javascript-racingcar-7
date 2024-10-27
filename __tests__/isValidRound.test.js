import { isValidRound } from "../src/validations/isValidRound.js";

describe("isValidRound 함수 테스트 : ", () => {
  test.each([
    {
      description:
        "아무런 입력도 하지 않은 경우 EMPTY_INPUT_ROUND 에러를 발생시킨다.",
      input: "",
      expectedError:
        "[ERROR] 숫자를 입력해 주세요. 빈 입력은 유효하지 않습니다.",
    },
    {
      description:
        "숫자를 입력하지 않은 경우 INVALID_ROUND_NUMBER 에러를 발생시킨다.",
      input: "p",
      expectedError:
        "[ERROR] 유효하지 않은 시도 횟수입니다. 숫자만 입력해 주세요.",
    },
    {
      description:
        "숫자를 입력하지 않은 경우 INVALID_ROUND_NUMBER 에러를 발생시킨다.",
      input: "1-",
      expectedError:
        "[ERROR] 유효하지 않은 시도 횟수입니다. 숫자만 입력해 주세요.",
    },
    {
      description: "숫자를 입력한 경우 에러를 발생시키지 않는다.",
      input: "5",
      expectedError: null,
    },
  ])("$description", ({ input, expectedError }) => {
    if (expectedError) {
      expect(() => isValidRound(input)).toThrowError(expectedError);
    } else {
      expect(() => isValidRound(input)).not.toThrowError();
    }
  });
});
