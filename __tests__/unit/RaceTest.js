import Race from '../../src/Race.js';
import Car from '../../src/Car.js';
import { getRandomNumber } from '../../src/common/utils.js';

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
  const CARS = ["Audi", "BMW", "Ford"];
  
  const initializeRaceWithDistances = (distances) => {
    const race = new Race();
    race.cars = CARS.map((name) => new Car(name));
    distances.forEach((distance, index) => race.cars[index].move(distance));
    return race;
  };

  test("최종 우승자를 올바르게 결정해야 한다", () => {
    const distances = [6, 4, 2];
    const expectedWinners = ["Audi"];
    const race = initializeRaceWithDistances(distances);

    const winners = race.getWinners();

    expect(winners).toEqual(expectedWinners);
  });

  test("최종 우승자가 여러 명일 때도 올바르게 결정해야 한다", () => {
    const distances = [5, 5, 3];
    const expectedWinners = ["Audi", "BMW"];
    const race = initializeRaceWithDistances(distances);

    const winners = race.getWinners();

    expect(winners).toEqual(expectedWinners);
  });
});
