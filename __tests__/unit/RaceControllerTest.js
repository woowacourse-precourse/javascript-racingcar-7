import RaceController from '../../src/RaceController.js';
import Car from '../../src/Car.js';
import { printMessage } from '../../src/common/utils.js';
import { GAME_RULES } from '../../src/common/constants.js';

jest.mock('../../src/common/utils.js', () => ({
  ...jest.requireActual('../../src/common/utils.js'),
  getCarName: jest.fn().mockResolvedValue("Audi,BMW,Ford"),
  getAttempt: jest.fn().mockResolvedValue("5"), 
  printMessage: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe("setCarName() 테스트", () => {
  test("자동차 이름마다 Car 객체가 생성되어야 한다", async () => {
    const raceController = new RaceController();
    await raceController.setCarName();
    const carNames = raceController.race.cars.map(car => car.getName());
    const carInstances = raceController.race.cars.every(car => car instanceof Car);
    
    expect(raceController.race.cars).toHaveLength(3);
    expect(carInstances).toBe(true);
    expect(carNames).toEqual(["Audi", "BMW", "Ford"]);
  });
});

describe("setAttemptCount() 테스트", () => {
  test("시도 횟수가 올바르게 설정되어야 한다", async () => {
    const raceController = new RaceController();
    await raceController.setAttemptCount();
    const attemptCount = raceController.race.attemptCount;
    
    expect(attemptCount).toBe(5);
  });
});

describe("runRaceRounds() 테스트", () => {
  test("시도 횟수만큼 레이스 라운드가 실행되어야 한다", async () => {
    const raceController = new RaceController();
    await raceController.setCarName();
    await raceController.setAttemptCount();
    const printRaceStatusSpy = jest.spyOn(raceController, 'printRaceStatus');
    const attemptCount = raceController.race.attemptCount;
    
    raceController.runRaceRounds();

    expect(printRaceStatusSpy).toHaveBeenCalledTimes(attemptCount);
  });
});

describe("printRaceStatus() 테스트", () => {
  test("자동차 이동 상태가 올바르게 출력되어야 한다", async () => {
    const raceController = new RaceController();
    await raceController.setCarName();
    raceController.race.cars[0].move(1);
    raceController.race.cars[1].move(0);
    raceController.race.cars[2].move(1);
    
    raceController.printRaceStatus();

    expect(printMessage).toHaveBeenCalledWith(`Audi : ${GAME_RULES.DISTANCE_SYMBOL}`);
    expect(printMessage).toHaveBeenCalledWith("BMW : ");
    expect(printMessage).toHaveBeenCalledWith(`Ford : ${GAME_RULES.DISTANCE_SYMBOL}`);
  });
});

describe("printWinners() 테스트", () => {
  test("최종 우승자를 출력해야 한다", async () => {
    const raceController = new RaceController();
    await raceController.setCarName();
    raceController.race.cars[0].move(6);
    raceController.race.cars[1].move(4);
    raceController.race.cars[2].move(6);
    const expectedWinners = "최종 우승자 : Audi, Ford";

    raceController.printWinners();

    expect(printMessage).toHaveBeenCalledWith(expectedWinners);
  });
});
