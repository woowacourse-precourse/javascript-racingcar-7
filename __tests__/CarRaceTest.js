import { MissionUtils } from '@woowacourse/mission-utils';
import CarRace from '../src/Model/CarRace.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('CarRace 클래스 테스트', () => {
  describe('isValidRaceCount 메서드 테스트', () => {
    test('0 보다 큰 정수에 대하여 true 반환', () => {
      expect(CarRace.isValidRaceCount(1)).toBe(true);
      expect(CarRace.isValidRaceCount('2')).toBe(true);
      expect(CarRace.isValidRaceCount('123')).toBe(true);
    });

    test('0 보다 큰 정수가 아닐 경우 false 반환', () => {
      expect(CarRace.isValidRaceCount(-1)).toBe(false);
      expect(CarRace.isValidRaceCount('abc')).toBe(false);
      expect(CarRace.isValidRaceCount(null)).toBe(false);
      expect(CarRace.isValidRaceCount(undefined)).toBe(false);
      expect(CarRace.isValidRaceCount(1.5)).toBe(false);
    });
  });

  describe('getMoveDecisions 메서드 테스트', () => {
    test('4보다 큰 정수에 대하여 true 반환', () => {
      mockRandoms([4, 3, 5, 2]);

      const carRace = new CarRace('car1,car2,car3,car4', 1);

      const moveDecisions = carRace.getMoveDecisions();
      expect(moveDecisions).toEqual([true, false, true, false]);
    });
  });

  describe('race 메서드 테스트', () => {
    test('자동차들의 이동 결과를 반환', () => {
      mockRandoms([4, 3, 5, 2]);

      const carRace = new CarRace('car1,car2,car3,car4', 1);
      const cars = carRace.race();

      expect(cars[0].getMoveCount()).toBe(1);
      expect(cars[1].getMoveCount()).toBe(0);
      expect(cars[2].getMoveCount()).toBe(1);
      expect(cars[3].getMoveCount()).toBe(0);
    });
  });
});
