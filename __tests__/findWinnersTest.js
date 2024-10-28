import { Random } from '@woowacourse/mission-utils';
import { findWinners } from '../src/utils/findWinners';
import Car from '../src/models/Car';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('findWinners 함수 테스트', () => {
  test('최대 거리의 Car 객체를 우승자로 반환해야 함', () => {
    const car1 = new Car('pobi');
    const car2 = new Car('woni');

    Random.pickNumberInRange.mockReturnValueOnce(5);
    car1.tryMove();

    const winners = findWinners([car1, car2]);
    expect(winners).toContain(car1);
    expect(winners).not.toContain(car2);
  });
});
