import carNameValidator from "../src/validator/carNameValidator.js";
import CustomError from "../src/CustomError.js";

describe("carNameValidator 테스트", () => {
  test.each([
    {
      input: "",
      expected: carNameValidator.NAME_RULE_SET.tooShort.errorMessage,
    },
    {
      input: "123456",
      expected: carNameValidator.NAME_RULE_SET.tooLong.errorMessage,
    },
  ])(
    "자동차 이름 '$input'은 '$expected' 메시지의 CustomError가 발생한다.",
    ({ input, expected }) => {
      expect(() => carNameValidator.checkLength(input)).toThrow(
        new CustomError(expected)
      );
    }
  );

  test.each([{ input: "1" }, { input: "12345" }])(
    "자동차 이름 '$input'은 에러가 발생하지 않는다.",
    ({ input }) => {
      expect(() => carNameValidator.checkLength(input)).not.toThrow(
        CustomError
      );
    }
  );
});
