import { progressRacing, printRacingStatus } from '../src/racing.js';
import { Console, MissionUtils } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
  MissionUtils: {
    Random: {
      pickNumberInRange: jest.fn(),
    },
  },
}));

describe('progressRacing, printRacingStatus', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('랜덤으로 생성된 숫자에 따라 알맞은 결과를 리턴한다.', () => {
    const carList = ['car1', 'car2', 'car3'];

    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(5);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(2);
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(9);
    
    const result = progressRacing(carList);

    expect(result).toEqual([1, 0, 1]);
  });

  test('경주 상태에 따라 알맞은 출력을 한다.', () => {
    const carList = ['car1', 'car2', 'car3'];
    const racingStatus = [3, 1, 4];

    printRacingStatus(carList, racingStatus);

    expect(Console.print).toHaveBeenCalledTimes(4);
    expect(Console.print).toHaveBeenCalledWith('car1 : ---');
    expect(Console.print).toHaveBeenCalledWith('car2 : -');
    expect(Console.print).toHaveBeenCalledWith('car3 : ----');
    expect(Console.print).toHaveBeenCalledWith('');
  });
});