import { isCarNamesValid, isTrialInputValid } from "../src/validation.js";
import { ERROR_MESSAGES } from "../src/constants/message.js";

describe("자동차 이름 유효성 검사 테스트", () => {
  const overMaxInputs = [
    [
      ["jiyeeeeeah", "hi", "ii"],
      ["Scoop", "IceCream"],
    ],
  ];
  test.each(overMaxInputs)("최댓값 넘어감", async (input) => {
    expect(isCarNamesValid(input)).toEqual({
      isCarValid: false,
      errCarMessage: ERROR_MESSAGES.OVER_CAR_NAME_LENGTH,
    });
  });

  const duplicateInputs = [
    [
      ["jiye", "jiye", "hi"],
      ["ice", "cream", "ice", "po"],
    ],
  ];
  test.each(duplicateInputs)("중복", async (input) => {
    expect(isCarNamesValid(input)).toEqual({
      isCarValid: false,
      errCarMessage: ERROR_MESSAGES.NO_DUPLICATE,
    });
  });

  const blankInputs = [[["hi", ""], ["   "]]];
  test.each(blankInputs)("공백 이름", async (input) => {
    expect(isCarNamesValid(input)).toEqual({
      isCarValid: false,
      errCarMessage: ERROR_MESSAGES.NO_BLANK,
    });
  });

  const passCarInputs = [
    [
      ["hi", "jiye"],
      ["ice", "Cream", "the", "best!"],
      ["lit", "Jen", "Chris"],
    ],
  ];
  test.each(passCarInputs)("통과 케이스", async (input) => {
    expect(isCarNamesValid(input)).toEqual({ isCarValid: true });
  });
});

describe("시도 횟수 유효성 검사 테스트", () => {
  const notNumberInputs = ["hi", NaN, "jiye"];
  test.each(notNumberInputs)("숫자가 아닌 경우", async (input) => {
    expect(isTrialInputValid(Number(input))).toEqual({
      isTrialValid: false,
      errTrialMessage: ERROR_MESSAGES.NOT_NUMBER,
    });
  });

  const negativeInputs = [-3, -82, -12356];
  test.each(negativeInputs)("음수인 경우", async (input) => {
    expect(isTrialInputValid(Number(input))).toEqual({
      isTrialValid: false,
      errTrialMessage: ERROR_MESSAGES.NOT_NEGATIVE,
    });
  });

  const passTrialInputs = [5, 8, 180, 200000];
  test.each(passTrialInputs)("통과 케이스", async (input) => {
    expect(isTrialInputValid(Number(input))).toEqual({ isTrialValid: true });
  });
});
