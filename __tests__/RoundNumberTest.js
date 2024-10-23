import { mockQuestions } from "./testUtils.js";
import { ROUND_ERROR } from "../src/lib/errors.js";
import { GAME_NUMBERS } from "../src/lib/constants.js";
import { read } from "../src/lib/utils.js";

const handleNumberErrors = (inputNumber) => {
  // 숫자가 아닌 값을 입력한 경우
  if (!Number.isInteger(inputNumber)) {
    throw new Error(ROUND_ERROR.IS_DIGIT);
  }

  // MIN ROUNDS 보다 작은 수를 입력한 경우
  if (inputNumber < GAME_NUMBERS.MIN_ROUNDS) {
    throw new Error(ROUND_ERROR.MIN_ROUNDS);
  }

  // MAX ROUNDS 보다 큰 수를 입력한 경우
  if (inputNumber > GAME_NUMBERS.MAX_ROUNDS) {
    throw new Error(ROUND_ERROR.MAX_ROUNDS);
  }
};

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
