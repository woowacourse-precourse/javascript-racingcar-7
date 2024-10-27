import Race from '../../src/Race.js';
import Car from '../../src/Car.js';
import { getRandomNumber, printMessage } from '../../src/utils.js';

jest.mock('../../src/utils.js', () => ({
  ...jest.requireActual('../../src/utils.js'),
  getRandomNumber: jest.fn(),
  printMessage: jest.fn(),
}));

describe("Race 클래스 테스트", () => {
  let race;

  beforeEach(() => {
    race = new Race();
    race.cars = [
      new Car("Audi"),
      new Car("BMW"),
      new Car("Ford")
    ];
    jest.clearAllMocks();
  });

  describe("generateRandomDistances() 테스트", () => {
    test("무작위 값이 4 이상일 때만 Car 객체가 이동해야 한다", () => {
      getRandomNumber.mockReturnValueOnce(3)
                     .mockReturnValueOnce(5)
                     .mockReturnValueOnce(7);

      race.generateRandomDistances();

      expect(race.cars[0].getDistance()).toBe(0); 
      expect(race.cars[1].getDistance()).toBe(1); 
      expect(race.cars[2].getDistance()).toBe(1); 
    });
  });

  describe("getWinners() 테스트", () => {
    test("최종 우승자를 올바르게 결정해야 한다", () => {
      race.cars[0].move(6); 
      race.cars[1].move(4); 
      race.cars[2].move(2); 

      const winners = race.getWinners();
      expect(winners).toEqual(["Audi"]);
    });

    test("최종 우승자가 여러 명일 때도 올바르게 결정해야 한다", () => {
      race.cars[0].move(5); 
      race.cars[1].move(5); 
      race.cars[2].move(3); 

      const winners = race.getWinners();
      expect(winners).toEqual(["Audi", "BMW"]);
    });
  });
});
