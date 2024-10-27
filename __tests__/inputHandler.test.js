import { inputHandler } from "../src/handlers/inputHandler.js";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/config/config.js";

describe("inputHandler 테스트", () => {
  beforeEach(() => {
    jest.spyOn(Console, "readLineAsync");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Console.readlineAsync로 입력을 받아서 반환하는 지 확인", async () => {
    Console.readLineAsync.mockResolvedValue("메시지");

    const result = await inputHandler("");
    expect(result).toBe("메시지");
  });

  test("입력이 공백일 때 에러를 발생시키는 지 확인", async () => {
    Console.readLineAsync.mockResolvedValue("");

    await expect(inputHandler("")).rejects.toThrow(MESSAGES.ERROR_INPUT_EMPTY);
  });
});
