import Race from '../../src/Race.js';
import Car from '../../src/Car.js';

jest.mock('../../src/utils.js', () => ({
  getCarName: jest.fn().mockResolvedValue("Audi,BMW,Ford"),
  getAttempt: jest.fn().mockResolvedValue("5"),
}));

describe("Race 클래스 테스트", () => {
  let race;

  beforeEach(() => {
    race = new Race();
  });

  describe("setCarName() 테스트", () => {

    test("자동차 이름마다 Car 객체가 생성되어야 한다", async () => {
      await race.setCarName(); 

      expect(race.cars).toHaveLength(3); 
      expect(race.cars.map(car => car.name)).toEqual(["Audi", "BMW", "Ford"]); 
    });
  });
});
