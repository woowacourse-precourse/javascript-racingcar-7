import Race from '../../src/Race.js';
import Car from '../../src/Car.js';
import { getRandomNumber, printMessage } from '../../src/common/utils.js';

jest.mock('../../src/common/utils.js', () => ({
  ...jest.requireActual('../../src/common/utils.js'),
  getRandomNumber: jest.fn(),
  printMessage: jest.fn(),
}));

describe("tryMoveCar() 테스트", () => {
  test("randomDistance가 4 미만이면 Car 객체가 이동하지 않아야 한다", () => {
    const race = new Race();
    const car = new Car("TestCar");
    getRandomNumber.mockReturnValue(3);
    const moveSpy = jest.spyOn(car, 'move');

    race.tryMoveCar(car);

    expect(moveSpy).not.toHaveBeenCalled();
  });

  test("randomDistance가 4 이상이면 Car 객체가 이동해야 한다", () => {
    const race = new Race();
    const car = new Car("TestCar");
    getRandomNumber.mockReturnValue(5);
    const moveSpy = jest.spyOn(car, 'move');

    race.tryMoveCar(car);

    expect(moveSpy).toHaveBeenCalledTimes(1);
  });
});

describe("getWinners() 테스트", () => {
  const testCases = [
    {
      description: "최종 우승자를 올바르게 결정해야 한다",
      distances: [6, 4, 2],
      expectedWinners: ["Audi"]
    },
    {
      description: "최종 우승자가 여러 명일 때도 올바르게 결정해야 한다",
      distances: [5, 5, 3],
      expectedWinners: ["Audi", "BMW"]
    }
  ];

  testCases.forEach(({ description, distances, expectedWinners }) => {
    test(description, () => {
      const race = new Race();
      race.cars = [
        new Car("Audi"),
        new Car("BMW"),
        new Car("Ford")
      ];
      jest.clearAllMocks();

      distances.forEach((distance, index) => race.cars[index].move(distance));

      const winners = race.getWinners();

      expect(winners).toEqual(expectedWinners);
    });
  });
});
