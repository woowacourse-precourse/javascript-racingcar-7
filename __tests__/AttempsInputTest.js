import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/constants";
import { getAttempts } from "../src/inputHandlers";

const mockConsoleInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValue(input);
};

describe("입력한 횟수 유효성 검사", () => {
  test("시도 횟수가 정수인지 검사", async () => {
    mockConsoleInput("7");

    const moveAttempts = await getAttempts();

    expect(moveAttempts).toBe(7);
  });

  test("시도 횟수가 0 이하일 경우 에러 발생", async () => {
    mockConsoleInput("0");

    await expect(getAttempts()).rejects.toThrow(
      ERROR_MESSAGES.ATTEMPTS_INVALID
    );
  });

  test("시도 횟수가 숫자가 아닐 경우 에러 발생", async () => {
    mockConsoleInput("test");

    await expect(getAttempts()).rejects.toThrow(
      ERROR_MESSAGES.ATTEMPTS_INVALID
    );
  });
});
