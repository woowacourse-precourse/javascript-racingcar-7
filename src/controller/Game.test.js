import { Console } from '@woowacourse/mission-utils';
import Race from '../model/Race.js';
import User from '../user/User.js';
import outputView from '../view/outputView.js';
import Game from './Game.js';
import * as validateCarNameModule from '../Validator/validateCarName.js';
import * as validateAttemptsModule from '../Validator/validateAttempts.js';
import { ERROR_PREFIX, GAME_MESSAGE } from '../constants/messages';
import throwError from '../util/errorThrower';

describe('Game 클래스', () => {
  let user;
  let raceModel;
  let game;

  let readCarNameSpy;
  let outputViewSpy;
  let readAttemptSpy;
  let determineWinnersSpy;
  let raceSpy;
  let announceWinnerSpy;

  let validateCarNameSpy;
  let validateAttemptsSpy;

  let printMessageSpy;
  beforeEach(() => {
    user = new User();
    raceModel = new Race();
    game = new Game(user, outputView, raceModel);

    readCarNameSpy = jest.spyOn(user, 'readCarNameInput');
    outputViewSpy = jest.spyOn(Console, 'print');
    readAttemptSpy = jest.spyOn(user, 'readAttemptsInput');
    determineWinnersSpy = jest.spyOn(raceModel, 'determineWinners');
    validateCarNameSpy = jest.spyOn(validateCarNameModule, 'validateCarName');
    validateAttemptsSpy = jest.spyOn(
      validateAttemptsModule,
      'validateAttempts'
    );
    printMessageSpy = jest.spyOn(outputView, 'printMessage');
    raceSpy = jest.spyOn(raceModel, 'race');
    announceWinnerSpy = jest.spyOn(outputView, 'announceWinner');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('process가 올바른 순서로 진행된다', async () => {
    const carNames = 'car1,car2,car3,car4';
    const attempts = 4;
    const winners = [{ name: 'car1' }];

    readCarNameSpy.mockResolvedValue(carNames);
    readAttemptSpy.mockResolvedValue(attempts);
    determineWinnersSpy.mockReturnValue(winners);

    await game.process();

    expect(readCarNameSpy).toHaveBeenCalledTimes(1);
    expect(validateCarNameSpy).toHaveBeenCalledWith(carNames);
    expect(readAttemptSpy).toHaveBeenCalledTimes(1);
    expect(validateAttemptsSpy).toHaveBeenCalledWith(attempts);
    expect(printMessageSpy).toHaveBeenCalledWith(`\n${GAME_MESSAGE.RESULT}`);
    expect(raceSpy).toHaveBeenCalledTimes(1);
    expect(determineWinnersSpy).toHaveBeenCalledTimes(1);
    expect(announceWinnerSpy).toHaveBeenCalledWith(winners);
  });

  test('자동차 이름 유효성 검사에서 예외가 발생하면 중단한다', async () => {
    const carNames = 'car1,car 2';
    readCarNameSpy.mockResolvedValue(carNames);
    validateCarNameSpy.mockImplementation(() => {
      throw new Error(ERROR_PREFIX);
    });

    await expect(game.process()).rejects.toThrow(ERROR_PREFIX);
    expect(readAttemptSpy).not.toHaveBeenCalled(); //자동차 이름 유효성 검사 이후 메서드는 실행 x
  });

  test('시도 횟수 입력에서 예외가 발생하면 중단한다', async () => {
    const carNames = 'car1,car2,car 3';
    readCarNameSpy.mockResolvedValue(carNames);
    validateCarNameSpy.mockImplementation(() => {});

    const attempts = 'a';
    readAttemptSpy.mockResolvedValue(attempts);
    validateAttemptsSpy.mockImplementation(() => {
      throw new Error(ERROR_PREFIX);
    });
    await expect(game.process()).rejects.toThrow(ERROR_PREFIX);
    expect(raceSpy).not.toHaveBeenCalled();
  });
});
