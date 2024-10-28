import Car from '../src/components/Car.js';
import CarAllocator from '../src/components/CarAllocator.js';
import Rules from '../src/resources/Rules.js';

describe('CarAllocator 클래스 테스트', () => {
  describe('parseNames 메서드', () => {
    test('이름 문자열을 구분자로 나누어 배열을 반환한다.', () => {
      const names = `Woo${Rules.DELIMITER}Wa${Rules.DELIMITER}Han`;
      const result = CarAllocator.parseNames(names);
      expect(result).toEqual(['Woo', 'Wa', 'Han']);
    });
  });

  describe('allocateCars 메서드', () => {
    test('이름 배열을 받아 각 이름에 대한 Car 인스턴스를 생성하여 반환한다.', () => {
      const nameList = ['Woo', 'Wa', 'Han'];
      const cars = CarAllocator.allocateCars(nameList);
      expect(cars).toHaveLength(3);
      expect(cars[0]).toBeInstanceOf(Car);
      expect(cars[0].name).toBe('Woo');
      expect(cars[1].name).toBe('Wa');
      expect(cars[2].name).toBe('Han');
    });
  });
});
