import { Console } from '@woowacourse/mission-utils';
import { startRace } from '../src/controllers/RaceController.js';
import * as randomUtils from '../src/utils/getRandomNumber.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

jest.mock('../src/utils/getRandomNumber.js');

describe('RaceController의 경주 진행 로직', () => {
  beforeEach(() => {
    Console.print.mockClear();
  });

  test('경주 결과가 올바르게 출력됩니다.', () => {
    randomUtils.getRandomNumber.mockReturnValue(4); // 전진 조건 충족
    const carNames = ['pobi', 'woni'];
    const tryCount = 2;

    startRace(carNames, tryCount);

    expect(Console.print).toHaveBeenCalledWith('pobi : --');
    expect(Console.print).toHaveBeenCalledWith('woni : --');
    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi, woni');
  });
});
