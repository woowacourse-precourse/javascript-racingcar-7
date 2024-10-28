import Car from '../../src/models/Car.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('Car', () => {
  describe('constructor', () => {
    it('Car 객체가 생성될 때 이름이 주어져야 한다', () => {
      const car = new Car('TestCar');
      expect(car.getName()).toBe('TestCar');
    });

    it('초기 위치는 0이어야 한다', () => {
      const car = new Car('TestCar');
      expect(car.getPosition()).toBe(0);
    });
  });

  describe('move', () => {
    it('랜덤 숫자가 MOVE_THRESHOLD 이상일 경우 위치가 증가한다', () => {
      mockRandoms([5]);
      const car = new Car('TestCar');

      car.move();

      expect(car.getPosition()).toBe(Car.MOVE_SPEED);
    });

    it('랜덤 숫자가 MOVE_THRESHOLD 미만일 경우 위치가 그대로 유지된다', () => {
      mockRandoms([3]);
      const car = new Car('TestCar');

      car.move();

      expect(car.getPosition()).toBe(0);
    });

    it('제너레이터 함수를 커스터마이징할 수 있다', () => {
      const customGenerator = () => 5;
      const car = new Car('CustomCar', customGenerator);

      car.move();

      expect(car.getPosition()).toBe(Car.MOVE_SPEED);
    });
  });

  describe('shouldMove', () => {
    it('랜덤 숫자가 MOVE_THRESHOLD 이상이면 true를 반환한다', () => {
      mockRandoms([4]);
      const car = new Car('TestCar');
      expect(car.move()).toBe(1);
    });

    it('랜덤 숫자가 MOVE_THRESHOLD 미만이면 false를 반환한다', () => {
      mockRandoms([3]);
      const car = new Car('TestCar');
      expect(car.move()).toBe(0);
    });
  });
});
