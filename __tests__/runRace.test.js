import runRace from '../src/runRace.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('경주 진행 로직 테스트', () => {
  test('각 자동차가 랜덤값에 따라 이동 여부를 결정', () => {
    const carNames = ['pobi', 'woni'];
    const attemptTimes = 1;
    const logSpy = getLogSpy();

    mockRandoms([4, 3]); // pobi는 이동, woni는 멈춤

    runRace(carNames, attemptTimes);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('pobi : -'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('woni : '));
  });
});
