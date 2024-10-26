import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("입력 오류 테스트", () => {
  test("자동차 이름: 5자 초과", async () => {
    const inputs = ["pobi,pororo"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름은 5글자")
  });

  test("자동차 이름: 공백", async () => {
    const inputs = ["pobi, "];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름은 공백")
  });

  test("자동차 이름: 중복", async () => {
    const inputs = ["pobi, crong, pobi"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름을 중복")
  });

  test("이동 횟수: 0", async () => {
    const inputs = ["pobi,crong", "0"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 1")
  });

  test("이동 횟수: 음수", async () => {
    const inputs = ["pobi,crong", "-3"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 1")
  });

  test("이동 횟수: 문자", async () => {
    const inputs = ["pobi,crong", "abc"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 숫자")
  });

  test("이동 횟수: 빈 값", async () => {
    const inputs = ["pobi,crong", ""];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 숫자")
  });

  test("이동 횟수: 소수", async () => {
    const inputs = ["pobi,crong", "1.9999999999999999"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 소수")
  });
});
