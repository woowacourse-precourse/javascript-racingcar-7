import Car from '../src/models/Car.js';
import Parser from '../src/utils/Parser.js';

describe('Car 클래스 테스트', () => {
  const car = new Car();

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('isAdvance() 메서드 - randomNumber가 최소 전진 조건 이상일 때', () => {
    jest.spyOn(car, 'pickRandomValue').mockReturnValue(4);

    const result = car.isAdvance();

    expect(result).toBe(1); // 전진해야 함
  });

  test('isAdvance() 메서드 - randomNumber가 최소 전진 조건 미만일 때', () => {
    jest.spyOn(car, 'pickRandomValue').mockReturnValue(2);

    const result = car.isAdvance();

    expect(result).toBe(0);
  });
  test('generateAdvanceSymbol(advance) 메서드 - 심볼을 잘 생성하는지', () => {
    const result = car.generateAdvanceSymbol(3);

    expect(result).toBe('---');
  });
});
