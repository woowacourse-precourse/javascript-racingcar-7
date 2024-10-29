import { Console } from '@woowacourse/mission-utils';
import Race from '../model/Race.js';
import User from '../user/User.js';
import outputView from '../view/outputView.js';
import Game from './Game.js';
import * as validateCarNameModule from '../Validator/validateCarName.js';
import * as validateAttemptsModule from '../Validator/validateAttempts.js';
import { ERROR_PREFIX, GAME_MESSAGE } from '../constants/messages';

describe('Game 클래스', () => {
  let user;
  let game;

  let readUserInputSpy;
  let outputViewSpy;
  let raceSpy;
  let announceWinnerSpy;

  let validateCarNameSpy;
  let validateAttemptsSpy;

  let printMessageSpy;
  beforeEach(() => {
    user = new User();
    game = new Game(user, outputView, Race);

    readUserInputSpy = jest.spyOn(user, 'readUserInput');
    outputViewSpy = jest.spyOn(Console, 'print');
    validateCarNameSpy = jest.spyOn(validateCarNameModule, 'validateCarName');
    validateAttemptsSpy = jest.spyOn(
      validateAttemptsModule,
      'validateAttempts'
    );
    printMessageSpy = jest.spyOn(outputView, 'printMessage');
    announceWinnerSpy = jest.spyOn(outputView, 'announceWinner');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('process가 올바른 결과를 반환한다', async () => {
    const carNames = 'car1,car2,car3,car4';
    const attempts = 4;
    const expectedWinners = [{ name: 'car1', position: 3 }];

    readUserInputSpy
      .mockResolvedValueOnce(carNames)
      .mockResolvedValueOnce(attempts);

    jest.spyOn(Race.prototype, 'race').mockImplementation(() => {});
    jest
      .spyOn(Race.prototype, 'determineWinners')
      .mockReturnValue(expectedWinners);

    await game.process();

    expect(validateCarNameSpy).toHaveBeenCalledWith(carNames);
    expect(validateAttemptsSpy).toHaveBeenCalledWith(attempts);
    expect(Race.prototype.race).toHaveBeenCalledWith(Number(attempts));
    expect(Race.prototype.determineWinners).toHaveBeenCalled();
    expect(announceWinnerSpy).toHaveBeenCalledWith(expectedWinners);
  });

  test('자동차 이름 유효성 검사에서 예외가 발생하면 중단한다', async () => {
    const carNames = 'car1,car 2';
    readUserInputSpy.mockResolvedValue(carNames);
    validateCarNameSpy.mockImplementation(() => {
      throw new Error(ERROR_PREFIX);
    });

    await expect(game.process()).rejects.toThrow(ERROR_PREFIX);
    expect(readUserInputSpy).not.toHaveBeenCalledTimes(2); //자동차 이름 유효성 검사 이후 메서드는 실행 x
  });

  test('시도 횟수 입력에서 예외가 발생하면 중단한다', async () => {
    const carNames = 'car1,car2,car 3';
    readUserInputSpy.mockResolvedValue(carNames);
    validateCarNameSpy.mockImplementation(() => {});

    const attempts = 'a';
    readUserInputSpy.mockResolvedValue(attempts);
    validateAttemptsSpy.mockImplementation(() => {
      throw new Error(ERROR_PREFIX);
    });

    const raceSpy = jest.spyOn(Race.prototype, 'race');

    await expect(game.process()).rejects.toThrow(ERROR_PREFIX);
    expect(raceSpy).not.toHaveBeenCalled();
  });
});
