import { Random } from '@woowacourse/mission-utils';
import CarRace from '../src/Model/CarRace.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

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
    Random.pickNumberInRange
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(2);

    const carRace = new CarRace('car1,car2,car3,car4', 1);
    const moveDecisions = carRace.getMoveDecisions();

    expect(moveDecisions).toEqual([true, false, true, false]);
  });
});
