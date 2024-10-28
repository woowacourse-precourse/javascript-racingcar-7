import { Console } from '@woowacourse/mission-utils';
import Car from './car.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('Car 클래스 테스트', () => {
  let car;

  beforeEach(() => {
    car = new Car('testCar');
    Console.print.mockClear();
  });

  test('Car 인스턴스 생성 시 이름과 초기 progress 값이 설정된다.', () => {
    expect(car.name).toBe('testCar');
    expect(car.progress).toBe(0);
  });

  test('move 메서드 호출 시 progress가 1 증가한다.', () => {
    car.move();
    expect(car.progress).toBe(1);
    car.move();
    expect(car.progress).toBe(2);
  });

  test('printProgress 메서드가 콘솔 출력 메시지를 올바르게 호출한다.', () => {
    car.move();
    car.printProgress();
    expect(Console.print).toHaveBeenCalledWith('testCar : -');

    car.move();
    car.printProgress();
    expect(Console.print).toHaveBeenCalledWith('testCar : --');
  });
});
