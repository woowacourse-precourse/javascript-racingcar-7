import RaceCar from '../../src/Domain/RaceCar';
import RaceCarMovementService from '../../src/Service/RaceCarMovementService';
import RandomNumberGenerateService from '../../src/Service/RandomNumberGenerateService';
import { mockRandoms } from '../ApplicationTest';

describe('raceCarMovementService', () => {
  test('전진 여부를 결정한다', () => {
    const mockValues = [4, 1];

    mockRandoms(mockValues);

    const randomNumberGenerateService = new RandomNumberGenerateService();
    const raceCarMovementService = new RaceCarMovementService(
      randomNumberGenerateService
    );

    expect(raceCarMovementService.decideMoveForward()).toBe(true);
    expect(raceCarMovementService.decideMoveForward()).toBe(false);
  });

  test('무작위 값이 4 이상일 때 전진한다', async () => {
    const raceCarName = 'pobi';
    const raceCars = [new RaceCar(raceCarName)];
    const mockValues = [8];

    mockRandoms(mockValues);

    const randomNumberGenerateService = new RandomNumberGenerateService();
    const raceCarMovementService = new RaceCarMovementService(
      randomNumberGenerateService
    );
    raceCarMovementService.moveCars(raceCars);

    expect(raceCars[0].getForwardCount()).toBe(1);
  });

  test('무작위 값이 3 이하일 때 전진하지 않는다', async () => {
    const raceCarName = 'pobi';
    const raceCars = [new RaceCar(raceCarName)];
    const mockValues = [2];

    mockRandoms(mockValues);

    const randomNumberGenerateService = new RandomNumberGenerateService();
    const raceCarMovementService = new RaceCarMovementService(
      randomNumberGenerateService
    );
    raceCarMovementService.moveCars(raceCars);

    expect(raceCars[0].getForwardCount()).toBe(0);
  });
});
