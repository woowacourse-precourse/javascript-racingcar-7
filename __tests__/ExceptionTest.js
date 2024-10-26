import {
  ERR_LENGTH,
  ERR_ISDUP,
  ERR_POSITIVE,
  ERR_ISNUMBER,
  ERR_ISINT,
} from "../src/Component/Error.js";
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
    [["choi,lee", "1.5"], ERR_ISINT()],
    [["kim", "-2.5"], ERR_ISINT()],
  ])("1 이상의 숫자를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["choi,lee", "0"], ERR_POSITIVE()],
    [["kim", "-2"], ERR_POSITIVE()],
  ])("1 이상의 숫자를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    [["choi", "a"], ERR_ISNUMBER()],
    [["kim", "+:/|-"], ERR_ISNUMBER()],
    [["haha,hehe", "페라리"], ERR_ISNUMBER()],
    [["a,b,c,d,e", "+10"], ERR_ISNUMBER()],
  ])("숫자를 입력하지 않은 경우", async (input, expectedError) => {
    mockQuestions(input);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
