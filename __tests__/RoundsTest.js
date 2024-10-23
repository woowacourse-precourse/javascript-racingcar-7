import { mockQuestions, mockRandoms } from "./testUtils.js";

describe("각 차수별 실행 결과 테스트", () => {
  test("각 차수별 실행 결과", async () => {
    mockQuestions(["pobi,woni", "3"]);
    mockRandoms([4, 3, 4, 4, 4, 3]);

    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : "));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : --"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : ---"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : -"));
  });
});
