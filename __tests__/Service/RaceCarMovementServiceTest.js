import RaceCar from '../../src/Domain/RaceCar';
import RaceCarMovementService from '../../src/Service/RaceCarMovementService';
import { mockRandoms } from '../ApplicationTest';

describe('raceCarMovementService', () => {
  test('0에서 9사이의 무작위 값을 생성한다', () => {
    const mockValues = [8];

    mockRandoms(mockValues);

    const raceCarMovementService = new RaceCarMovementService();
    const randomValue = raceCarMovementService.generateRandomNumber();

    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThanOrEqual(9);
  });

  test('전진 여부를 결정한다', () => {
    const mockValues = [4, 1];

    mockRandoms(mockValues);

    const raceCarMovementService = new RaceCarMovementService();

    expect(raceCarMovementService.decideMoveForward()).toBe(true);
    expect(raceCarMovementService.decideMoveForward()).toBe(false);
  });

  test('무작위 값이 4 이상일 때 전진한다', async () => {
    const raceCarName = 'pobi';
    const raceCars = [new RaceCar(raceCarName)];
    const mockValues = [8];

    mockRandoms(mockValues);

    const raceCarMovementService = new RaceCarMovementService();
    raceCarMovementService.moveCars(raceCars);

    expect(raceCars[0].getForwardCount()).toBe(1);
  });

  test('무작위 값이 3 이하일 때 전진하지 않는다', async () => {
    const raceCarName = 'pobi';
    const raceCars = [new RaceCar(raceCarName)];
    const mockValues = [2];

    mockRandoms(mockValues);

    const raceCarMovementService = new RaceCarMovementService();
    raceCarMovementService.moveCars(raceCars);

    expect(raceCars[0].getForwardCount()).toBe(0);
  });
});
