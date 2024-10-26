import Race from '../../src/Race.js';
import { getRandomNumber } from '../../src/utils.js';
import { GAME_RULES } from '../../src/constants.js';

jest.mock('../../src/utils.js', () => ({
  getCarName: jest.fn().mockResolvedValue("Audi,BMW,Ford"),
  getAttempt: jest.fn().mockResolvedValue("5"),
  getRandomNumber: jest.fn(),
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
      console.log = jest.fn(); 

      race.printRaceStatus();

      const symbol = GAME_RULES.DISTANCE_SYMBOL;

      expect(console.log).toHaveBeenCalledWith(`Audi : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith("BMW : ");
      expect(console.log).toHaveBeenCalledWith(`Ford : ${symbol}`);
    });

    test("시도 횟수만큼 자동차 이동 상태가 출력되어야 한다", async () => {
      const symbol = GAME_RULES.DISTANCE_SYMBOL;
  
      getRandomNumber
        .mockReturnValueOnce(4) 
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(5)
        .mockReturnValueOnce(3) 
        .mockReturnValueOnce(6)
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(5) 
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(3);
  
      await race.setCarName();
      await race.setAttemptCount();
      console.log = jest.fn(); 
  
      await race.startRace();
  
      expect(console.log).toHaveBeenCalledWith(`Audi : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith("BMW : ");
      expect(console.log).toHaveBeenCalledWith(`Ford : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith(""); 
  
      expect(console.log).toHaveBeenCalledWith(`Audi : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith(`BMW : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith(`Ford : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith("");
  
      expect(console.log).toHaveBeenCalledWith(`Audi : ${symbol}${symbol}`);
      expect(console.log).toHaveBeenCalledWith(`BMW : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith(`Ford : ${symbol}`);
      expect(console.log).toHaveBeenCalledWith(""); 
    });
  });
});
