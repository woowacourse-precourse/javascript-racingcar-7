import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/utils/Car.js';

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Car 클래스 테스트', () => {
  let car;
  beforeEach(() => {
    // 각 테스트가 시작할 때마다 새로운 Car 객체 생성
    car = new Car('pobi');
  });

  describe('랜덤 숫자에 따라 전진 여부 테스트', () => {
    test('랜덤 숫자가 4이상일 경우 전진', () => {
      car.move(5);
      expect(car.getPosition()).toBe('pobi : -');
    });

    test('랜덤 숫자가 4미만일 경우 정지', () => {
      car.move(2);
      expect(car.getPosition()).toBe('pobi : ');
    });
  });
});
