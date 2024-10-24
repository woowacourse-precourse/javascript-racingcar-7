import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('차량 전진 테스트', () => {
  const mockStraight = jest.fn();
  beforeEach(() => {
    // 여기서 mockRandoms를 호출하여 랜덤 숫자를 설정
    mockRandoms([5]); // 예시로 5를 설정
  });

  mockStraight.mockImplementation(car => {
    const num = MissionUtils.Random.pickNumberInRange(0, 9); // 랜덤 숫자 가져오기
    if (num > 4) {
      return car.concat('-');
    }
    return car;
  });
  test('랜덤 숫자가 4이상일 경우 - 를 붙인다', () => {
    expect(mockStraight('pobi: -')).toBe('pobi: --');
  });
  test('랜덤 숫자가 4 미만일 경우 - 를 붙인다', () => {
    mockRandoms([3]);
    expect(mockStraight('pobi: -')).toBe('pobi: -');
  });
});
