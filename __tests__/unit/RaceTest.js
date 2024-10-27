import Race from '../../src/Race.js';
import { getRandomNumber, printMessage } from '../../src/utils.js';
import { GAME_RULES } from '../../src/constants.js';

jest.mock('../../src/utils.js', () => ({
  ...jest.requireActual('../../src/utils.js'), 
  getCarName: jest.fn().mockResolvedValue("Audi,BMW,Ford"), 
  getAttempt: jest.fn().mockResolvedValue("5"),
  getRandomNumber: jest.fn(),
  printMessage: jest.fn(),
}));


describe("Race 클래스 테스트", () => {
  let race;

  beforeEach(() => {
    race = new Race();
    jest.clearAllMocks(); 
  });

  describe("setCarName() 테스트", () => {

    test("자동차 이름마다 Car 객체가 생성되어야 한다", async () => {
      await race.setCarName(); 

      expect(race.cars).toHaveLength(3); 
      expect(race.cars.map(car => car.getName())).toEqual(["Audi", "BMW", "Ford"]); 
    });
  });

  describe("generateRandomDistances() 테스트", () => {

    test("무작위 값이 4 이상일 때만 Car 객체가 이동해야 한다", async () => {
      getRandomNumber.mockReturnValueOnce(3)
                     .mockReturnValueOnce(5)
                     .mockReturnValueOnce(7);
      
      await race.setCarName();

      race.generateRandomDistances();

      expect(race.cars[0].getDistance()).toBe(0); 
      expect(race.cars[1].getDistance()).toBe(1); 
      expect(race.cars[2].getDistance()).toBe(1); 
    });
  });

  describe("printRaceStatus() 테스트", () => {

    test("자동차 이동 상태가 올바르게 출력되어야 한다", async () => {
      getRandomNumber.mockReturnValueOnce(4) 
                     .mockReturnValueOnce(3) 
                     .mockReturnValueOnce(4); 

      await race.setCarName();
      race.generateRandomDistances();

      const symbol = GAME_RULES.DISTANCE_SYMBOL;

      race.printRaceStatus();
      expect(printMessage).toHaveBeenCalledWith(`Audi : ${symbol}`);
      expect(printMessage).toHaveBeenCalledWith("BMW : ");
      expect(printMessage).toHaveBeenCalledWith(`Ford : ${symbol}`);
    });

    test("시도 횟수만큼 자동차 이동 상태가 출력되어야 한다", async () => {
      const printRaceStatusSpy = jest.spyOn(race, 'printRaceStatus');

      await race.startRace();

      expect(printRaceStatusSpy).toHaveBeenCalledTimes(5); 
    });
  });

  describe("getWinners() 테스트", () => {

    test("최종 우승자를 올바르게 결정해야 한다", async () => {
      await race.setCarName();

      race.cars[0].move(6); 
      race.cars[1].move(4); 
      race.cars[2].move(2); 

      const winners = race.getWinners();
      expect(winners).toEqual(["Audi"]);

      race.printWinners();
      expect(printMessage).toHaveBeenCalledWith("최종 우승자 : Audi");
    });

    test("최종 우승자가 여러 명일 때도 올바르게 결정해야 한다", async () => {
      await race.setCarName();

      race.cars[0].move(5); 
      race.cars[1].move(5); 
      race.cars[2].move(3); 

      const winners = race.getWinners();
      expect(winners).toEqual(["Audi", "BMW"]);

      race.printWinners();
      expect(printMessage).toHaveBeenCalledWith("최종 우승자 : Audi, BMW");
    });
  });
});
