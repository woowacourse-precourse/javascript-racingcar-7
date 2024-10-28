import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const testInvalidRounds = async (round) => {
  mockQuestions(["pobi,woni", round]);
  const app = new App();
  await expect(app.run()).rejects.toThrow(
    new Error("[ERROR] 양의 정수로 된 시도횟수를 입력하세요.")
  );
};

describe("시도 횟수 관련 테스트", () => {
  test("잘못된 시도 횟수 - 숫자 입력 안함", async () => {
    mockQuestions(["pobi,woni", ""]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수를 입력해주세요."
    );
  });

  test("잘못된 시도횟수 - 'abc' 입력", async () => {
    await testInvalidRounds("abc");
  });

  test("잘못된 시도횟수 - '-1' 입력", async () => {
    await testInvalidRounds("-1");
  });

  test("잘못된 시도횟수 - '0' 입력", async () => {
    await testInvalidRounds("0");
  });

  test("잘못된 시도횟수 - '3.5' 입력", async () => {
    await testInvalidRounds("3.5");
  });

  test("잘못된 시도횟수 - 'five' 입력", async () => {
    await testInvalidRounds("five");
  });
});
