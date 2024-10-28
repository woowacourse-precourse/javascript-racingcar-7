import App from "../src/App.js";
import { mockRandoms, mockQuestions, getLogSpy } from "./ApplicationTest.js";

describe("기능 검사", () => {
  const app = new App();

  test("pickWinner 함수 테스트", () => {
    const racingCarsPos = { pobi: "---", woni: "--", jason: "--" };
    expect(app.pickWinner(racingCarsPos)).toEqual(["pobi"]);
  });

  test("playTurn 함수 테스트", () => {
    const racingCarsPos = { pobi: "---", woni: "--", jason: "--" };
    mockRandoms([5, 3, 4]);

    const logs = ["pobi : ----", "woni : --", "jason : ---", "\n"];
    const logSpy = getLogSpy();

    app.playTurn(["pobi", "woni", "jason"], racingCarsPos);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    expect(racingCarsPos).toEqual({
      pobi: "----",
      woni: "--",
      jason: "---",
    });
  });

  test("moveCar 함수 테스트", () => {
    const racingCarsPos = { pobi: "---", woni: "--", jason: "--" };
    mockRandoms([5]);
    app.moveCar(racingCarsPos, "pobi");
    expect(racingCarsPos["pobi"]).toBe("----");
  });

  test("getRandomNumber 함수 테스트", () => {
    mockRandoms([3]);
    const number = app.getRandomNumber();
    expect(number).toBe(3);
  });
});
