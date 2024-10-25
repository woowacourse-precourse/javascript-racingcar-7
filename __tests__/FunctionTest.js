import App from "../src/App.js";

test("6자 이상의 자동차 이름이 있는 경우 false", () => {
  const app = new App();
  expect(app.hasLongCarName(["kim", "doidoi", "young"])).toBe(false);
});

test("숫자로 시작하는 자동차 이름이 있는 경우 true", () => {
  const app = new App();
  expect(
    app.hasCarNameStartingWithNumber(["oioi", "917", "8abd", "doi99"])
  ).toBe(true);
});
