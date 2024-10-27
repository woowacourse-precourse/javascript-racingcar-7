import Car from "../src/Car.js";
import OutputView from "../src/OutputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 테스트", () => {
  it("자동차의 이름과 거리를 포맷에 맞게 출력한다.", () => {
    const mockCarNameList = ["dong", "ja"];
    const mockCarList = mockCarNameList.map((car) => new Car(car));

    const logs = ["dong : -", "ja : -"];
    const logSpy = getLogSpy();

    mockCarList.forEach((car) => car.move());
    mockCarList.forEach((car) => OutputView.printCarStatus(car));

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  it("최종 우승자를 포맷에 맞게 출력한다", () => {
    const logs = ["최종 우승자 : dongja", "최종 우승자 : dong, ja"];
    const logSpy = getLogSpy();

    OutputView.printWinnerList(["dongja"]);
    OutputView.printWinnerList(["dong", "ja"]);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
