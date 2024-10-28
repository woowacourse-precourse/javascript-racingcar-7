import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 입력 관련 예외 테스트", () => {
  test("자동차 이름의 길이가 1미만인 경우", async () => {
    const inputs = [",james"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름의 길이가 공백 포함 5자 초과인 경우", async () => {
    const inputs = ["멋진 자동차", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 공백으로만 이루어진 경우", async () => {
    const inputs = ["자동차,   ,car", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 중국어(간체)인 경우", async () => {
    const inputs = ["자동차,car,汽车", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 중국어(번체)인 경우", async () => {
    const inputs = ["자동차,car,汽車", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 불어인 경우", async () => {
    const inputs = ["자동차,car,café", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 스페인어인 경우", async () => {
    const inputs = ["자동차,car,móvil", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 일본어(히라가나)인 경우", async () => {
    const inputs = ["자동차,car,くるま", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 일본어(가타카나)인 경우", async () => {
    const inputs = ["자동차,car,ジドウシャ", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 러시아어인 경우", async () => {
    const inputs = ["자동차,car,ашина", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
