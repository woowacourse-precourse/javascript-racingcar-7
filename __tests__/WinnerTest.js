import App from "../src/App.js";
import { mockQuestions, mockRandoms, getLogSpy } from "./testUtils.js";

describe("우승자 안내 문구", () => {
  test("단독 우승자", async () => {
    mockQuestions(["car1,car2", "3"]);
    mockRandoms([4, 3, 4, 3, 4, 3]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : car1")
    );
  });

  test("공동 우승자", async () => {
    mockQuestions(["car1,car2,car3", "3"]);
    mockRandoms([4, 4, 3, 4, 4, 3, 4, 4, 3]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : car1, car2")
    );
  });
});
