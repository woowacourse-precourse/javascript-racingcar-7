// __tests__/CarRacingController.test.js

import CarRacingController from "../src/controller/CarRacingController.js";
import { Console, Random } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  return logSpy;
};

describe("CarRacingController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("여러 명이 동시에 우승하는 경우", async () => {
    const controller = new CarRacingController();
    const logSpy = getLogSpy();

    // 입력값을 모킹하여 테스트
    jest
      .spyOn(Console, "readLineAsync")
      .mockImplementationOnce((_, callback) => callback("pobi,jun,woni")) // 첫 호출: 자동차 이름 입력
      .mockImplementationOnce((_, callback) => callback("1")); // 두 번째 호출: 시도 횟수 입력

    // 랜덤값을 모킹하여 자동차 움직임 조작
    jest
      .spyOn(Random, "pickNumberInRange")
      .mockReturnValueOnce(5) // pobi 이동
      .mockReturnValueOnce(5) // jun 이동
      .mockReturnValueOnce(3); // woni 정지

    await controller.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi, jun")
    );
  }, 5000);

  test("단독 우승하는 경우", async () => {
    const controller = new CarRacingController();
    const logSpy = getLogSpy();

    // 입력값 모킹
    jest
      .spyOn(Console, "readLineAsync")
      .mockImplementationOnce((_, callback) => callback("pobi,jun,woni")) // 첫 호출: 자동차 이름 입력
      .mockImplementationOnce((_, callback) => callback("1")); // 두 번째 호출: 시도 횟수 입력

    // 랜덤값 모킹
    jest
      .spyOn(Random, "pickNumberInRange")
      .mockReturnValueOnce(5) // pobi 이동
      .mockReturnValueOnce(3) // jun 정지
      .mockReturnValueOnce(3); // woni 정지

    await controller.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi")
    );
  }, 5000);
});
