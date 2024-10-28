import CarRace from '../src/Model/CarRace.js';

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
});
