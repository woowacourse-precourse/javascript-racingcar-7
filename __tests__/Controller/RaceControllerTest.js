import RaceController from '../../src/Controller/RaceController';
import RaceCarManagementService from '../../src/Service/RaceCarManagementService';
import RaceCarMovementService from '../../src/Service/RaceCarMovementService';
import DetermineWinnerService from '../../src/Service/DetermineWinnerService';
import RaceService from '../../src/Service/RaceService';
import InputView from '../../src/View/InputView';
import OutputView from '../../src/View/OutputView';
import { getLogSpy, mockQuestions, mockRandoms } from '../ApplicationTest';
import RandomNumberGenerateService from '../../src/Service/RandomNumberGenerateService';

describe('RaceController', () => {
  test('자동차 경주 게임의 전체 흐름을 검증한다', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = [
      '\n실행 결과',
      'pobi : -',
      'woni : ',
      '',
      '최종 우승자 : pobi',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const inputView = new InputView();
    const outputView = new OutputView();
    const raceCarManagementService = new RaceCarManagementService();
    const randomNumberGenerateService = new RandomNumberGenerateService();
    const raceCarMovementService = new RaceCarMovementService(
      randomNumberGenerateService
    );
    const determineWinnerService = new DetermineWinnerService();
    const raceService = new RaceService(
      raceCarManagementService,
      raceCarMovementService,
      determineWinnerService
    );
    const raceController = new RaceController(
      inputView,
      raceService,
      outputView
    );

    await raceController.run();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
