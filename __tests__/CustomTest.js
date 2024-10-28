import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 유효성 검사", () => {
  test("이름 입력이 2개 미만인 경우", async () => {
    const cases = [
      ["jun"],
      ["lee"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 이름은 최소 2개 이상 입력해야 합니다.");
    }
  });

  test("공백을 이름으로 입력한 경우", async () => {
    const cases = [
      ["jun,  "],
      [" ,lee"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 이름은 공백일 수 없습니다");
    }
  });

  test("이름이 중복일 경우", async () => {
    const cases = [
      ["jun,jun,lee"],
      ["lee,jun,lee"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 중복된 이름이 있습니다");
    }
  });

  test("이름이 5자를 초과할 경우", async () => {
    const cases = [
      ["aaaaaa,jun"],
      ["jun,bbbbbb"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 이름은 5자 이내여야 합니다");
    }
  });

  test("시도 횟수가 숫자가 아닐 경우", async () => {
    const cases = [
      ["a,b", "three"],
      ["a,b", "시도횟수"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }
  });

  test("시도 횟수가 정수가 아닐 경우", async () => {
    const cases = [
      ["a,b", "1.5"],
      ["a,b", "2.7"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 정수여야 합니다.");
    }
  });

  test("시도 횟수가 0 이하일 경우", async () => {
    const cases = [
      ["a,b", "-1"],
      ["a,b", "0"],
    ];

    for (const inputs of cases) {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 1 이상의 양수여야 합니다.");
    }
  });
});
