import {
  ERR_LENGTH,
  ERR_COR_NAME,
  ERR_ISDUP,
  ERR_TWO_CAR,
  ERR_POSITIVE,
  ERR_ISINT,
} from "../src/Error/Error.js";
import App from "../src/App.js";
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
    [["choi,hahaha"], ERR_LENGTH()],
    [["kim,,min"], ERR_LENGTH()],
    [[",lee"], ERR_LENGTH()],
    [["choi1,kim1234"], ERR_LENGTH()],
    [["dong,"], ERR_LENGTH()],
  ])("자동차 이름이 1~5자 사이가 아닌 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["사람,haha?"], ERR_COR_NAME()],
    [["두 산"], ERR_COR_NAME()],
    [["+==,!!*"], ERR_COR_NAME()],
    [["a1,a2,a4,a+10"], ERR_COR_NAME()],
  ])("자동차 이름이 적절하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["a,a,a"], ERR_ISDUP()],
    [["b,c,a,a"], ERR_ISDUP()],
    [["z,a,a,d,d,e"], ERR_ISDUP()],
    [["a,a,b,c,d,e"], ERR_ISDUP()],
  ])("자동차 이름에 중복이 있을 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["a"], ERR_TWO_CAR()],
    [["최씨"], ERR_TWO_CAR()],
  ])("자동차가 1개만 있을 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["choi,lee", "0"], ERR_POSITIVE()],
    [["kim,park", "-2"], ERR_POSITIVE()],
    [["kim,bug", "-2.5"], ERR_POSITIVE()],
    [["a,e,u", "0.0"], ERR_POSITIVE()],
  ])("1 이상의 숫자를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["choi,mark", "a"], ERR_ISINT()],
    [["kim,john", "+:/|-"], ERR_ISINT()],
    [["haha,hehe", "페라리"], ERR_ISINT()],
    [["a,b,c,d,e", "+10"], ERR_ISINT()],
    [["choi,lee", "1.5"], ERR_ISINT()],
  ])("정수를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
