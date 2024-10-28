import attemptHandler from "../src/handler/attemptHandler";

describe("시도 횟수 입력값 태스트", () => {
  const CORRECT_CASE = [10, 4, 2, 3];

  test.each(CORRECT_CASE)("정상 입력값 테스트", async (attempt) => {
    expect(attemptHandler(attempt)).toBeUndefined();
  });

  const ERROR_CASE = [
    [-2, '[ERROR] 시도 횟수는 1 이상이어야 합니다.'],
    ['', '[ERROR] 시도 횟수를 입력해주세요.'],
    ['a', '[ERROR] 시도 횟수는 숫자만 입력 가능합니다.']
  ];

  test.each(ERROR_CASE)("예외 케이스 테스트", async (attempt, errorMessage) => {
    await expect(() => attemptHandler(attempt)).toThrow(errorMessage);
  });
});
