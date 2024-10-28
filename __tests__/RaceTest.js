import { Console } from '@woowacourse/mission-utils';
import Race from '../src/models/Race';
import Car from '../src/models/Car';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('Race 클래스 테스트', () => {
  test('start 메서드가 올바르게 라운드를 진행하고 출력을 수행해야 함', () => {
    const cars = [new Car('pobi'), new Car('crong')];
    const race = new Race(cars, 2);

    jest.spyOn(cars[0], 'tryMove').mockImplementation(() => {});
    jest.spyOn(cars[0], 'printStatus').mockImplementation(() => {});
    jest.spyOn(cars[1], 'tryMove').mockImplementation(() => {});
    jest.spyOn(cars[1], 'printStatus').mockImplementation(() => {});

    race.start();

    expect(Console.print).toHaveBeenCalledWith('\n실행 결과');

    cars.forEach((car) => {
      expect(car.tryMove).toHaveBeenCalledTimes(2);
      expect(car.printStatus).toHaveBeenCalledTimes(2);
    });

    expect(Console.print).toHaveBeenCalledWith('');
    expect(Console.print).toHaveBeenCalledTimes(3);
  });
});
