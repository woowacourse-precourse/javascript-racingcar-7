import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../src/models/Car';

describe('Car 클래스', () => {
  let car;
  let mockRandomNumberGenerator;

  beforeEach(() => {
    car = new Car('pobi');
    mockRandomNumberGenerator = jest.spyOn(
      MissionUtils.Random,
      'pickNumberInRange',
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('올바른 이름과 위치로 초기화해야 합니다', () => {
    expect(car.name).toBe('pobi');
    expect(car.getDistance()).toBe(0);
  });

  describe('updateDistance 메서드', () => {
    test('randomNumber가 4보다 클 때 위치를 증가시켜야 합니다', () => {
      mockRandomNumberGenerator.mockReturnValueOnce(5);
      car.updateDistance();
      expect(car.getDistance()).toBe(1);
    });

    test('randomNumber가 4일 때 위치를 증가시켜야 합니다', () => {
      mockRandomNumberGenerator.mockReturnValueOnce(4);
      car.updateDistance();
      expect(car.getDistance()).toBe(1);
    });

    test('randomNumber가 4보다 작을 때 위치를 증가시키지 않아야 합니다', () => {
      mockRandomNumberGenerator.mockReturnValueOnce(3);
      car.updateDistance();
      expect(car.getDistance()).toBe(0);
    });

    test('여러 번의 이동을 올바르게 처리해야 합니다', () => {
      const number_list = [5, 4, 3, 6];
      number_list.forEach((number) =>
        mockRandomNumberGenerator.mockReturnValueOnce(number),
      );
      number_list.forEach(() => car.updateDistance());

      // 예상되는 거리: 3 (5, 4, 6에서 이동, 3에서는 이동하지 않음)
      expect(car.getDistance()).toBe(3);
    });

    test('updateDistance를 호출하지 않으면 위치가 증가하지 않아야 합니다', () => {
      expect(car.getDistance()).toBe(0);
    });

    test('랜덤 숫자가 항상 4보다 작으면 위치가 증가하지 않아야 합니다', () => {
      const number_list = [1, 2, 3, 2, 1];
      number_list.forEach((number) =>
        mockRandomNumberGenerator.mockReturnValueOnce(number),
      );
      number_list.forEach(() => car.updateDistance());
      expect(car.getDistance()).toBe(0);
    });

    test('랜덤 숫자가 항상 4 이상이면 위치가 그에 따라 증가해야 합니다', () => {
      const number_list = [3, 4, 5, 6, 7, 8, 9];
      number_list.forEach((number) =>
        mockRandomNumberGenerator.mockReturnValueOnce(number),
      );
      number_list.forEach(() => car.updateDistance());
      expect(car.getDistance()).toBe(6);
    });
  });
});
