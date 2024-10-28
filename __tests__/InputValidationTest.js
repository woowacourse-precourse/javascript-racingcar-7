import App from "../src/App.js";

describe("입력값 유효성 검사", () => {
  const app = new App();
  test("자동차의 이름이 유효합니다", () => {
    expect(() => app.validateCarName(["pobi", "woni", "jason"])).not.toThrow();
  });

  test("게임의 실행 횟수가 유효합니다", () => {
    expect(() => app.validateGameCount(3)).not.toThrow();
  });

  test.each([
    { inputs: ["pobi", "", "woni"], description: "자동차의 이름이 공백입니다" },
    {
      inputs: ["pobi", "woniii"],
      description: "자동차의 이름이 5자보다 깁니다",
    },
    {
      inputs: ["pobi", "woni", "pobi"],
      description: "자동차의 이름이 중복됩니다",
    },
  ])("$description", ({ inputs }) => {
    expect(() => app.validateCarName(inputs)).toThrow("[ERROR]");
  });

  test.each([
    { inputs: -3, description: "실행 횟수가 음수입니다" },
    {
      inputs: 0.5,
      description: "실행 횟수가 정수가 아닙니다",
    },
    {
      inputs: "A",
      description: "실행 횟수가 정수가 아닙니다",
    },
  ])("$description", ({ inputs }) => {
    expect(() => app.validateGameCount(inputs)).toThrow("[ERROR]");
  });
});
