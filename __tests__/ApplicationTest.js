import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 - 성공 테스트 케이스", () => {
  test.each([
    {
      testName: "1. 기능 테스트 - 우승자 한명",
      inputs: ["pobi,woni", "1"],
      logs: ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      moveAndStop: [4, 3],
    },
    {
      testName: "2. 기능 테스트 - 우승자 한명이상",
      inputs: ["pobi,woni,jun", "1"],
      logs: ["pobi : -", "woni : ", "jun : -", "공동 우승자 : pobi, jun"],
      moveAndStop: [8, 2, 8],
    },
    {
      testName: "3. 기능 테스트 - 여러 번 이동",
      inputs: ["pobi,woni,jun", "2"],
      logs: [
        "pobi : -",
        "woni : ",
        "jun : -",
        "pobi : -",
        "woni : -",
        "jun : --",
        "최종 우승자 : jun",
      ],
      moveAndStop: [5, 2, 5, 2, 5, 5],
    },
    {
      testName: "4. 기능 테스트 - 여러 번 이동, 우승자 한명이상",
      inputs: ["pobi,woni,jun", "4"],
      logs: [
        "pobi : -",
        "woni : ",
        "jun : -",
        "pobi : --",
        "woni : -",
        "jun : --",
        "pobi : ---",
        "woni : --",
        "jun : --",
        "pobi : ---",
        "woni : ---",
        "jun : --",
        "공동 우승자 : pobi, woni",
      ],
      moveAndStop: [5, 2, 5, 5, 5, 5, 5, 5, 2, 2, 5, 2],
    },
    {
      testName: "5. 기능 테스트 - 자동차 모두 우승자일 때",
      inputs: ["pobi,woni,jun", "3"],
      logs: [
        "pobi : -",
        "woni : -",
        "jun : ",
        "pobi : -",
        "woni : --",
        "jun : -",
        "pobi : --",
        "woni : --",
        "jun : --",
        "무승부 : pobi, woni, jun",
      ],
      moveAndStop: [7, 7, 1, 1, 7, 7, 7, 1, 7],
    },
    {
      testName: "6. 기능 테스트 - 같은 이름이 존재",
      inputs: ["pobi,pobi,jun", "3"],
      logs: [
        "1.pobi : -",
        "2.pobi : ",
        "jun : ",
        "1.pobi : --",
        "2.pobi : -",
        "jun : -",
        "1.pobi : --",
        "2.pobi : -",
        "jun : -",
        "최종 우승자 : 1.pobi",
      ],
      moveAndStop: [9, 0, 0, 9, 9, 9, 0, 0, 0],
    },
    {
      testName: "7. 입력 테스트 - 자동차 이름에 공백이 있을 떄",
      inputs: ["pobi     ,wo ni,    jun ", "6"],
      logs: [
        "pobi : -",
        "wo ni : ",
        "jun : -",
        "pobi : --",
        "wo ni : -",
        "jun : --",
        "pobi : --",
        "wo ni : --",
        "jun : --",
        "pobi : --",
        "wo ni : --",
        "jun : --",
        "pobi : ---",
        "wo ni : ---",
        "jun : ---",
        "pobi : ---",
        "wo ni : ----",
        "jun : ----",
        "공동 우승자 : wo ni, jun",
      ],
      moveAndStop: [5, 2, 5, 5, 5, 5, 2, 5, 2, 2, 2, 2, 5, 5, 5, 2, 5, 5],
    },
    {
      testName: "8. 입력 테스트 - 자동차 이름에 다양한 특수 문자 존재",
      inputs: ["po/bi,2woni,j..un", "3"],
      logs: [
        "po/bi : -",
        "2woni : -",
        "j..un : -",
        "po/bi : -",
        "2woni : --",
        "j..un : --",
        "po/bi : --",
        "2woni : --",
        "j..un : ---",
        "최종 우승자 : j..un",
      ],
      moveAndStop: [6, 6, 6, 2, 6, 6, 6, 2, 6],
    },
    {
      testName: "9. 입력 테스트 - 이름이 없는 자동차가 있을 때",
      inputs: ["pobi,,jun", "3"],
      logs: [
        "pobi : -",
        "jun : -",
        "pobi : -",
        "jun : --",
        "pobi : --",
        "jun : ---",
        "최종 우승자 : jun",
      ],
      moveAndStop: [4, 5, 2, 6, 7, 8],
    },
    {
      testName: "10. 입력 테스트 - 자동차 이름에 ','가 포함돼있을 때",
      inputs: ["pobi,j,,un", "3"],
      logs: [
        "pobi : -",
        "j,,un : -",
        "pobi : -",
        "j,,un : --",
        "pobi : --",
        "j,,un : ---",
        "최종 우승자 : j,,un",
      ],
      moveAndStop: [5, 5, 2, 6, 7, 8],
    },
    {
      testName: "11. 입력 테스트 - 시도 횟수에 스페이스가 포함될 때",
      inputs: ["pobi,jun", "  1   0  "],
      logs: [
        "pobi : -",
        "jun : -",
        "pobi : --",
        "jun : -",
        "pobi : --",
        "jun : --",
        "pobi : --",
        "jun : --",
        "pobi : ---",
        "jun : ---",
        "pobi : ----",
        "jun : ---",
        "pobi : -----",
        "jun : ----",
        "pobi : -----",
        "jun : ----",
        "pobi : -----",
        "jun : -----",
        "pobi : -----",
        "jun : ------",
        "최종 우승자 : jun",
      ],
      moveAndStop: [6, 4, 6, 2, 0, 7, 1, 0, 7, 8, 5, 1, 6, 5, 3, 3, 3, 8, 3, 9],
    },
  ])("$testName", async ({ inputs, logs, moveAndStop }) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(moveAndStop);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
describe("자동차 경주 - 에러 테스트 케이스", () => {
  test.each([
    {
      testName: "1. 예외 테스트 - 한 대이상의 자동차 이름을 입력하지 않았을 때",
      inputs: [""],
    },
    {
      testName: "2. 예외 테스트 - 너무 많은 자동차가 있을 때",
      inputs: ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z", "3"],
    },
    {
      testName: "3. 예외 테스트 - 자동차 이름이 5자 이상일 때",
      inputs: ["pobi,javaji"],
    },
    {
      testName: "4. 예외 테스트 - 시도 횟수를 아무것도 입력 안했을 때",
      inputs: ["pobi,woni", ""],
    },
    {
      testName: "5. 예외 테스트 - 시도 횟수를 스페이스만 입력 했을 때",
      inputs: ["pobi,woni", " "],
    },
    {
      testName: "6. 예외 테스트 - 시도 횟수가 숫자가 아닐 때",
      inputs: ["pobi,woni", "3a3"],
    },
    {
      testName: "7. 예외 테스트 - 시도 횟수가 너무 많을 때",
      inputs: ["pobi,woni", (Number.MAX_SAFE_INTEGER + 1).toString()],
    },
    {
      testName: "8. 예외 테스트 - 시도 횟수가 양의 정수가 아닐 때",
      inputs: ["pobi,woni", "5.1"],
    },
  ])("$testName", async ({ inputs }) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
