import App from "../src/App.js";
import { ERR_MESSAGE } from "../src/Component/Error.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("예외 테스트", () => {
  test.each([
    [["choi,hahaha"], ERR_MESSAGE],
    [["kim,,min"], ERR_MESSAGE],
    [[",lee"], ERR_MESSAGE],
    [["choi1,kim1234"], ERR_MESSAGE],
    [["dong,"], ERR_MESSAGE],
  ])("자동차 이름이 1~5자 사이가 아닌 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["choi,lee", "0"], ERR_MESSAGE],
    [["kim", "-1"], ERR_MESSAGE],
    [["a,b,c,d,e", "-7777"], ERR_MESSAGE],
  ])("1 이상의 숫자를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["choi", "a"], ERR_MESSAGE],
    [["kim", "+:/|-"], ERR_MESSAGE],
    [["haha,hehe", "페라리"], ERR_MESSAGE],
  ])("숫자를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
