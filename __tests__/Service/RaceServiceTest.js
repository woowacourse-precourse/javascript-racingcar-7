import CarManagementService from '../../src/Service/CarManagementService';
import CarMovementService from '../../src/Service/CarMovementService';
import DetermineWinnerService from '../../src/Service/DetermineWinnerService';
import RaceService from '../../src/Service/RaceService';
import { mockRandoms } from '../ApplicationTest';

describe('RaceService', () => {
  test('경기를 시작하고 끝나면 우승자를 반환한다', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const carNames = ['pobi', 'woni'];
    const attemptCount = 3;
    const winner = ['pobi'];

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
    ]);

    const carManagementService = new CarManagementService();
    const carMovementService = new CarMovementService();
    const determineWinnerService = new DetermineWinnerService();
    const raceService = new RaceService(
      carManagementService,
      carMovementService,
      determineWinnerService
    );

    raceService.start(carNames, attemptCount);
    raceService.determineWinner();

    expect(raceService.getWinners()).toEqual(winner);
  });

  test('경기를 시작하고 끝나면 경기 기록을 반환한다', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const carNames = ['pobi', 'woni'];
    const attemptCount = 3;
    const record = {
      raceCarNames: carNames,
      raceRecords: [
        [1, 0],
        [2, 0],
        [2, 1],
      ],
    };

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
    ]);

    const carManagementService = new CarManagementService();
    const carMovementService = new CarMovementService();
    const determineWinnerService = new DetermineWinnerService();
    const raceService = new RaceService(
      carManagementService,
      carMovementService,
      determineWinnerService
    );

    raceService.start(carNames, attemptCount);
    raceService.determineWinner();

    expect(raceService.getRaceRecords()).toEqual(record);
  });
});
