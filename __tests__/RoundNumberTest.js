import { mockQuestions } from "../src/lib/testUtils.js";
import { read } from "../src/lib/utils.js";
import { handleNumberErrors } from "../src/lib/validations.js";

const validateRoundNumber = async (type, message) => {
  const input = await read();
  const inputNumber = Number(input);

  if (type === "pass") {
    expect(input).toEqual(message);
  }

  if (type === "error") {
    handleNumberErrors(inputNumber);
  }
};

describe("시도 횟수 테스트", () => {
  const ERROR_CASES = [
    [["asdf"], "[ERROR] 숫자만 입력해 주세요."],
    [["0"], "[ERROR] 1 이상의 숫자를 입력해 주세요."],
    [["101"], "[ERROR] 100 이하의 숫자를 입력해 주세요."],
  ];

  const PASS_CASES = [
    [["1"], "1"],
    [["3"], "3"],
  ];

  test.each(ERROR_CASES)("시도 횟수 오류 테스트", async (input, message) => {
    mockQuestions(input);
    await expect(validateRoundNumber("error")).rejects.toThrow(message);
  });

  test.each(PASS_CASES)("시도 횟수 패스 테스트", async (input, message) => {
    mockQuestions(input);
    await validateRoundNumber("pass", message);
  });
});
