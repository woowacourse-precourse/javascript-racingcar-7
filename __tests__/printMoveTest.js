import { MissionUtils } from "@woowacourse/mission-utils";
import { printCarsMove, printWinners } from "../src/interfaceUtils.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 전진 테스트", () => {
  const carsMoveTest = [
    [
      [
        ["hi", 2],
        ["ji", 3],
      ],
      ["hi : --", "ji : ---"],
    ],
    [
      [
        ["jiye", 5],
        ["Sarah", 8],
        ["Jen", 20],
      ],
      ["jiye : -----", "Sarah : --------", "Jen : --------------------"],
    ],
  ];
  test.each(carsMoveTest)("출력 테스트", (inp, print) => {
    // given
    const input = new Map(inp);
    const logs = print;
    const logSpy = getLogSpy();

    // when
    printCarsMove(input);

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  const winnersPrintTest = [
    [["ji", "hi"], "최종 우승자 : ji, hi"],
    [["Sarah"], "최종 우승자 : Sarah"],
  ];
  test.each(winnersPrintTest)("우승자 출력 테스트", (winners, print) => {
    // given
    const logSpy = getLogSpy();

    // when
    printWinners(winners);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(print));
  });
});
