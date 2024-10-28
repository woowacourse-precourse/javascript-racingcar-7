import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/view/Output";
import { OUTPUT_PRINT_MESSAGES } from "../src/constants/printMessage.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력", () => {
  describe("자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.", () => {
    test("우승자 배열에 자동차 하나가 있을 때, 우승자를 출력하면, 단독 우승자 안내 문구를 출력한다.", () => {
      // given
      const cars = ["ham"];
      const logSpy = getLogSpy();

      // when
      Output.printWinners(cars);

      // then
      expect(logSpy).toHaveBeenCalledWith(OUTPUT_PRINT_MESSAGES.winners("ham"));
    });

    test("우승자 배열에 자동차 두개가 있을 때, 우승자를 출력하면, 공동 우승자 안내 문구를 출력한다.", () => {
      // given
      const cars = ["ham", "pobi"];
      const logSpy = getLogSpy();

      // when
      Output.printWinners(cars);

      // then
      expect(logSpy).toHaveBeenCalledWith(OUTPUT_PRINT_MESSAGES.winners("ham, pobi"));
    });
  });

  describe("차수별 실행 결과를 출력한다.", () => {
    test("경주 게임 로그 배열이 있을 때, 경주 게임의 로그를 출력하면, 차수별 실행 결과를 출력한다.", () => {
      // given
      const raceLogs = [
        [{ name: "pobi", dist: 1 }, { name: "ham", dist: 0 }],
        [{ name: "pobi", dist: 2 }, { name: "ham", dist: 1 }],
      ];
      const logs = [OUTPUT_PRINT_MESSAGES.resultTitle, "pobi : -", "ham : ", "pobi : --", "ham : -"];
      const logSpy = getLogSpy();

      // when
      Output.printResults(raceLogs);

      // then
      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
