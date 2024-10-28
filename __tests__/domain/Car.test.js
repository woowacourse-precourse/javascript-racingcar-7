import { MissionUtils } from '@woowacourse/mission-utils';
import { RacingCar } from '../../src/domain/Car.js';

describe('RacingCar 테스트', () => {
  beforeEach(() => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
  });

  describe('자동차 생성 테스트', () => {
    test('정상적인 이름으로 자동차가 생성되는지 확인', () => {
      // given
      const carName = 'pobi';

      // when
      const racingCar = new RacingCar(carName);

      // then
      expect(racingCar.getCarName()).toBe(carName);
      expect(racingCar.getMoveCount()).toBe(0);
    });

    test('이름이 5자를 초과하면 에러가 발생하는지 확인', () => {
      // given
      const invalidName = 'pobicrong';

      // when & then
      expect(() => new RacingCar(invalidName)).toThrow('[ERROR]');
    });
  });

  describe('자동차 이동 테스트', () => {
    test('랜덤 값이 4 이상일 때 전진하는지 확인', () => {
      // given
      const car = new RacingCar('pobi');
      MissionUtils.Random.pickNumberInRange.mockReturnValue(4);

      // when
      car.moveCar();

      // then
      expect(car.getMoveCount()).toBe(1);
      expect(MissionUtils.Random.pickNumberInRange);
    });

    test('랜덤 값이 4 미만일 때 정지하는지 확인', () => {
      // given
      const car = new RacingCar('pobi');
      MissionUtils.Random.pickNumberInRange.mockReturnValue(3);

      // when
      car.moveCar();

      // then
      expect(car.getMoveCount()).toBe(0);
      expect(MissionUtils.Random.pickNumberInRange);
    });

    test('여러 번의 이동 시도 후 이동 거리가 정확한지 확인', () => {
      // given
      const car = new RacingCar('pobi');
      const mockValues = [4, 3, 5, 2, 4];
      let callCount = 0;
      MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
        const value = mockValues[callCount];
        callCount += 1;
        return mockValues[value];
      });

      // when
      mockValues.forEach(() => car.moveCar());

      // then
      expect(car.getMoveCount()).toBe(3);
      expect(MissionUtils.Random.pickNumberInRange).toHaveBeenCalledTimes(5);
    });
  });

});
