import RaceController from '../../src/RaceController.js';
import Car from '../../src/Car.js';
import { getCarName, getAttempt, printMessage } from '../../src/common/utils.js';
import { GAME_RULES } from '../../src/common/constants.js';

jest.mock('../../src/common/utils.js', () => ({
  ...jest.requireActual('../../src/common/utils.js'),
  getCarName: jest.fn().mockResolvedValue("Audi,BMW,Ford"),
  getAttempt: jest.fn().mockResolvedValue("5"), 
  printMessage: jest.fn(),
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

  describe("printRaceStatus() 테스트", () => {
    test("자동차 이동 상태가 올바르게 출력되어야 한다", async () => {
      await raceController.setCarName();
      raceController.race.cars[0].move(1);
      raceController.race.cars[1].move(0);
      raceController.race.cars[2].move(1);

      raceController.printRaceStatus();

      const symbol = GAME_RULES.DISTANCE_SYMBOL;
      expect(printMessage).toHaveBeenCalledWith(`Audi : ${symbol}`);
      expect(printMessage).toHaveBeenCalledWith("BMW : ");
      expect(printMessage).toHaveBeenCalledWith(`Ford : ${symbol}`);
    });

    test("시도 횟수만큼 자동차 이동 상태가 출력되어야 한다", async () => {
      await raceController.setCarName();
      await raceController.setAttemptCount();

      const printRaceStatusSpy = jest.spyOn(raceController, 'printRaceStatus');
      await raceController.startRace();

      expect(printRaceStatusSpy).toHaveBeenCalledTimes(5); // 시도 횟수가 5이므로 5번 호출 예상
    });
  });

  describe("printWinners() 테스트", () => {
    test("최종 우승자를 출력해야 한다", async () => {
      await raceController.setCarName();
      raceController.race.cars[0].move(6);
      raceController.race.cars[1].move(4);
      raceController.race.cars[2].move(6);

      raceController.printWinners();
      expect(printMessage).toHaveBeenCalledWith("최종 우승자 : Audi, Ford");
    });
  });
});
