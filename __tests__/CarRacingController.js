import { MissionUtils } from "@woowacourse/mission-utils";
import CarRacingController from "../src/controller/CarRacingController.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("CarRacingController 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("여러 명이 동시 우승하는 경우", async () => {
    const controller = new CarRacingController();
    const logSpy = getLogSpy();

    // 입력값 모킹
    jest.spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValueOnce("pobi,jun,woni")  // 자동차 이름 입력
      .mockResolvedValueOnce("1");             // 시도 횟수 입력

    // 랜덤값 모킹
    jest.spyOn(MissionUtils.Random, "pickNumberInRange")
      .mockReturnValueOnce(5)  // pobi 이동
      .mockReturnValueOnce(5)  // jun 이동
      .mockReturnValueOnce(3); // woni 정지

    await controller.play();
    
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi, jun")
    );
  });

  test("단독 우승하는 경우", async () => {
    const controller = new CarRacingController();
    const logSpy = getLogSpy();

    // 입력값 모킹
    jest.spyOn(MissionUtils.Console, "readLineAsync")
      .mockResolvedValueOnce("pobi,jun,woni")  // 자동차 이름 입력
      .mockResolvedValueOnce("1");             // 시도 횟수 입력

    // 랜덤값 모킹
    jest.spyOn(MissionUtils.Random, "pickNumberInRange")
      .mockReturnValueOnce(5)  // pobi 이동
      .mockReturnValueOnce(3)  // jun 정지
      .mockReturnValueOnce(3); // woni 정지

    await controller.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi")
    );
  });
});