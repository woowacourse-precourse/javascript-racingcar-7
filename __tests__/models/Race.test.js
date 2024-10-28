import Race from '../../src/models/Race.js';
import Car from '../../src/models/Car.js';
import { Console } from '@woowacourse/mission-utils';
import { readUserInput } from '../../src/utils/readUserInput.js';

const mockConsolePrint = () => {
  Console.print = jest.fn();
};

const mockReadUserInput = (carNames, tryNumber) => {
  readUserInput.mockImplementationOnce(() => Promise.resolve(carNames));
  readUserInput.mockImplementationOnce(() => Promise.resolve(tryNumber));
};

const mockCars = (carData) => {
  return carData.map(({ name, positions }) => {
    const car = new Car(name);
    car.getName = jest.fn(() => name);
    car.move = jest.fn(() => positions.shift());
    car.getPosition = jest.fn(() => positions[0] || 0);
    return car;
  });
};

jest.mock('../../src/utils/readUserInput.js');
jest.mock('../../src/models/Car.js');
jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
}));

describe('Race', () => {
  let race;

  beforeEach(() => {
    race = new Race(',', '-');
    mockConsolePrint();
  });

  describe('ready', () => {
    it('자동차 이름과 시도 횟수를 입력받는다.', async () => {
      const carNames = 'car1,car2';
      const tryNumber = '3';
      mockReadUserInput(carNames, tryNumber);

      await race.ready();

      expect(readUserInput).toHaveBeenCalledTimes(2);
      expect(Car).toHaveBeenCalledWith('car1');
      expect(Car).toHaveBeenCalledWith('car2');
    });
  });

  describe('start', () => {
    it('경주를 시작하고 각 차가 위치를 출력한다.', async () => {
      const cars = mockCars([
        { name: 'car1', positions: [3, 4] },
        { name: 'car2', positions: [1, 2] },
      ]);

      race.ready = jest.fn().mockResolvedValue();
      race.start = jest.fn(() => {
        cars.forEach((car) => {
          Console.print(`${car.getName()} : ${'-'.repeat(car.move())}`);
        });
        Console.print('');
      });

      await race.ready();
      race.start();

      expect(Console.print).toHaveBeenCalledWith('car1 : ---');
      expect(Console.print).toHaveBeenCalledWith('car2 : -');
      expect(Console.print).toHaveBeenCalledWith('');
    });
  });

  describe('printWinners', () => {
    it('최종 우승자를 출력한다.', async () => {
      const cars = mockCars([
        { name: 'car1', positions: [3] },
        { name: 'car2', positions: [1] },
      ]);

      race.ready = jest.fn().mockResolvedValue();
      race.printWinners = jest.fn(() => {
        const maxDistance = Math.max(...cars.map((car) => car.getPosition()));
        const winners = cars
          .filter((car) => car.getPosition() === maxDistance)
          .map((car) => car.getName())
          .join(', ');

        Console.print(`최종 우승자 : ${winners}`);
      });

      await race.ready();
      race.printWinners();

      expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1');
    });

    it('우승자가 여러 명일 때 모두 출력한다.', async () => {
      const cars = mockCars([
        { name: 'car1', positions: [3] },
        { name: 'car2', positions: [3] },
      ]);

      race.ready = jest.fn().mockResolvedValue();
      race.printWinners = jest.fn(() => {
        const maxDistance = Math.max(...cars.map((car) => car.getPosition()));
        const winners = cars
          .filter((car) => car.getPosition() === maxDistance)
          .map((car) => car.getName())
          .join(', ');

        Console.print(`최종 우승자 : ${winners}`);
      });

      await race.ready();
      race.printWinners();

      expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car2');
    });
  });
});
