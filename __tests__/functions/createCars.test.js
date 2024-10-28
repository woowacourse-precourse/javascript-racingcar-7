import createCars from '../../src/functions/createCars';
import Car from '../../src/car/Car';

describe('createCars 함수 테스트', () => {
  test.each([
    [
      ['Moon', 'seong', 'hui'],
      [new Car('Moon', 0), new Car('seong', 0), new Car('hui', 0)],
    ],
    [['MOON'], [new Car('MOON', 0)]],
  ])(
    '자동차 이름 배열이 주어졌을 때 Car 객체 배열 반환',
    (carNamesArray, expected) => {
      const cars = createCars(carNamesArray);
      expect(cars).toEqual(expected);
    },
  );
});
