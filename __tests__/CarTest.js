import Car from '../src/models/Car.js';
import Parser from '../src/utils/Parser.js';

describe('Car 클래스 테스트', () => {
  const car = new Car();

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('반환값이 ', () => {
    const splitSpy = jest.spyOn(calculator, 'splitInputString');
    calculator.calculate('1,2,3');

    expect(splitSpy).toHaveBeenCalled();
    expect(splitSpy.mock.results[0].value).toEqual(['1', '2', '3']);
  });
});
