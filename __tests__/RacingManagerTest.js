import RacingManager from '../src/RacingManager.js';
import Car from '../src/Car.js';

describe('RacingManager 메서드 테스트', () => {
  test.each([['woowa,tech'], ['코스,제네시스']])(
    'register 메서드 테스트',
    (names) => {
      const cars = RacingManager.register(names);

      expect(Array.isArray(cars)).toBe(true);

      cars.forEach((element) => {
        expect(element).toBeInstanceOf(Car);
      });
    },
  );
});
