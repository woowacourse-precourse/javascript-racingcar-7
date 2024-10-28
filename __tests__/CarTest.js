import { Console, Random } from '@woowacourse/mission-utils';
import Car from '../src/models/Car';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('Car 클래스 테스트', () => {
  test('getName 메서드가 올바른 이름을 반환해야 함', () => {
    const car = new Car('pobi');
    expect(car.getName()).toBe('pobi');
  });

  test('getDistance 메서드가 초기 거리 0을 반환해야 함', () => {
    const car = new Car('pobi');
    expect(car.getDistance()).toBe(0);
  });

  test('tryMove 메서드가 이동 조건을 만족할 때만 거리 증가', () => {
    const car = new Car('pobi');

    Random.pickNumberInRange.mockReturnValueOnce(5);
    car.tryMove();
    expect(car.getDistance()).toBe(1);

    Random.pickNumberInRange.mockReturnValueOnce(1);
    car.tryMove();
    expect(car.getDistance()).toBe(1);
  });

  test('printStatus가 Console.print를 올바르게 호출해야 함', () => {
    const car = new Car('pobi');

    car.printStatus();
    expect(Console.print).toHaveBeenCalledWith('pobi : ');

    Random.pickNumberInRange.mockReturnValueOnce(5);
    car.tryMove();
    car.printStatus();
    expect(Console.print).toHaveBeenCalledWith('pobi : -');
  });
});
