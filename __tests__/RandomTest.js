import { Random } from '@woowacourse/mission-utils';
import pickRandomNumberInRange from '../src/util/pickRandomNumberInRange';

describe('random function', () => {
  beforeEach(() => {
    jest
      .spyOn(Random, 'pickNumberInRange')
      .mockImplementation((startRange, endRange) => {
        // 항상 중간값을 반환하도록 모의 처리
        return Math.floor((startRange + endRange) / 2);
      });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('0-9 사이의 랜덤한 숫자 추출하기', () => {
    const startRange = 0;
    const endRange = 9;
    const result = pickRandomNumberInRange(startRange, endRange);
    expect(result).toBeGreaterThanOrEqual(startRange);
    expect(result).toBeLessThanOrEqual(endRange);
  });

  test('mock에서 설정한 중간값 반환되는지 확인하기', () => {
    const startRange = 2;
    const endRange = 8;
    const result = pickRandomNumberInRange(startRange, endRange);
    expect(result).toBe(5);
  });
});
