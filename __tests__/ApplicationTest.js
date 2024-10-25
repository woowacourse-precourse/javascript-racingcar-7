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

describe("자동차 경주", () => {
  test.each`
    #    | firstRandomValue | secondRandomValue | moves                       | winner
    ${1} | ${0}             | ${0}              | ${["pobi : ", "woni : "]}   | ${"pobi, woni"}
    ${2} | ${0}             | ${9}              | ${["pobi : ", "woni : -"]}  | ${"woni"}
    ${3} | ${9}             | ${0}              | ${["pobi : -", "woni : "]}  | ${"pobi"}
    ${4} | ${9}             | ${9}              | ${["pobi : -", "woni : -"]} | ${"pobi, woni"}
  `(
    `case $# : 첫 번째 사람의 randomNumber가 $firstRandomValue, 두 번째 사람의 randomNumber가 $secondRandomValue 라면, 우승자는 $winner 입니다.`,
    async ({ firstRandomValue, secondRandomValue, moves, winner }) => {
      // given
      const inputs = ["pobi,woni", "1"];
      const logs = [...moves, `최종 우승자 : ${winner}`];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([firstRandomValue, secondRandomValue]);

      // when
      const app = new App();
      await app.run();

      // then
      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    }
  );
});

describe("예외 테스트", () => {
  test.each`
    #    | carNamesInput     | roundInput
    ${1} | ${"123456,12345"} | ${"1"}
    ${2} | ${""}             | ${"1"}
    ${3} | ${"12345;1234"}   | ${"1"}
    ${4} | ${"12345,1234"}   | ${""}
    ${5} | ${"12345,1234"}   | ${"ㄱ"}
  `(
    `case $# : 자동차 이름을 $carNamesInput, 진행 횟수를 $roundInput 로 입력하면 , 에러가 발생합니다.`,
    async ({ carNamesInput, roundInput }) => {
      // given
      const inputs = [carNamesInput, roundInput];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  );
});
