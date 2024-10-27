import { MissionUtils } from "@woowacourse/mission-utils";
import CarRacingController from "../src/controller/CarRacingController.js";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe('CarRacingController 테스트', () => {
  test('여러 명이 동시 우승하는 경우', async () => {
    const controller = new CarRacingController();
    controller.setCars([
      { getName: () => 'pobi', getPosition: () => 5 },
      { getName: () => 'jun', getPosition: () => 5 },
      { getName: () => 'woni', getPosition: () => 4 }
    ]);

    const logSpy = getLogSpy();
    controller.announceWinners();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('최종 우승자 : pobi, jun')
    );
  });

  test('단독 우승하는 경우', async () => {
    const controller = new CarRacingController();
    controller.setCars([
      { getName: () => 'pobi', getPosition: () => 5 },
      { getName: () => 'jun', getPosition: () => 4 },
      { getName: () => 'woni', getPosition: () => 3 }
    ]);

    const logSpy = getLogSpy();
    controller.announceWinners();
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('최종 우승자 : pobi')
    );
  });
});