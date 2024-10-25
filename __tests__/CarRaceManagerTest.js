import CarRaceManager from '../src/CarRaceManager.js';
import { getLogSpy, mockRandoms } from '../src/utils/testUtil.js';

describe('자동차 경주', () => {
  test('우승자 테스트', async () => {
    // given
    const cars = ['haesa', 'harry'];
    const tryCount = 1;
    const randomNumbers = [7, 8];
    const logs = ['haesa : -', 'harry : -', '최종 우승자 : haesa, harry'];
    const logSpy = getLogSpy();

    mockRandoms(randomNumbers);

    // when
    const carRaceManager = new CarRaceManager(cars, tryCount);
    carRaceManager.race();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
