import App from "../src/App.js";
import { mockQuestions } from "./ApplicationTest.js";

describe("입력값 유효성 검사", () => {
  const app = new App();
  test("자동차의 이름이 유효합니다", async () => {
    expect(() => app.validateCarName(["pobi", "woni", "jason"])).not.toThrow();
  });

  test("게임의 실행 횟수가 유효합니다", async () => {
    expect(() => app.validateGameCount(3)).not.toThrow();
  });
});
