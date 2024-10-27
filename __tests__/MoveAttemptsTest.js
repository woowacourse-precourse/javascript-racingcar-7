import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockConsoleInput = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockResolvedValue(input);
};

describe("이동 횟수 입력 기능", () => {
  test("시도 횟수가 양의 정수인지 검사", async () => {
    mockConsoleInput("3");

    const app = new App();
    const moveAttempts = await app.getMoveAttempts();

    expect(moveAttempts).toBe(3);
  });

  test("시도 횟수가 0 이하일 경우 에러 발생", async () => {
    mockConsoleInput("0");

    const app = new App();

    await expect(app.getMoveAttempts()).rejects.toThrow(
      "[ERROR] 시도 횟수는 1 이상의 양의 정수여야 합니다."
    );
  });

  test("시도 횟수가 숫자가 아닐 경우 에러 발생", async () => {
    mockConsoleInput("five");

    const app = new App();

    await expect(app.getMoveAttempts()).rejects.toThrow(
      "[ERROR] 시도 횟수는 1 이상의 양의 정수여야 합니다."
    );
  });
});
