import RaceController from '../../src/RaceController.js';
import Car from '../../src/Car.js';
import { getCarName } from '../../src/utils.js';

jest.mock('../../src/utils.js', () => ({
  ...jest.requireActual('../../src/utils.js'), 
  getCarName: jest.fn().mockResolvedValue("Audi,BMW,Ford"),
}));

describe("RaceController 클래스 테스트", () => {
  let raceController;

  beforeEach(() => {
    raceController = new RaceController();
    jest.clearAllMocks(); 
  });

  describe("setCarName() 테스트", () => {
    test("자동차 이름마다 Car 객체가 생성되어야 한다", async () => {
      await raceController.setCarName(); 

      expect(raceController.race.cars).toHaveLength(3); 
      expect(raceController.race.cars[0]).toBeInstanceOf(Car);
      expect(raceController.race.cars[1]).toBeInstanceOf(Car);
      expect(raceController.race.cars[2]).toBeInstanceOf(Car);
      expect(raceController.race.cars.map(car => car.getName())).toEqual(["Audi", "BMW", "Ford"]); 
    });
  });
});
