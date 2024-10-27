import { Console } from '@woowacourse/mission-utils';
import RacingController from '../../src/controller/racingController.js';
import RacingModel from '../../src/model/racingModel.js';
import RacingView from '../../src/view/racingView.js';
import ERROR_MESSAGE from '../../src/constant/error.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
}));

jest.mock('../../src/model/racingModel.js');
jest.mock('../../src/view/racingView.js');

describe('RacingController', () => {
  let racingController;

  beforeEach(() => {
    racingController = new RacingController();
    Console.print.mockClear();
    Console.readLineAsync.mockClear();
    RacingModel.mockClear();
    RacingView.printRaceStatus.mockClear();
    RacingView.printWinners.mockClear();
    RacingView.printError.mockClear();
  });

  test('inputCarNames()에서 올바른 자동차 이름 입력 시 이름 배열을 반환한다', async () => {
    Console.readLineAsync.mockResolvedValue('pobi,wook,jay');
    const carNames = await racingController.inputCarNames();
    expect(carNames).toEqual(['pobi', 'wook', 'jay']);
  });

  test('inputCarNames()에서 잘못된 자동차 이름 입력 시 오류를 발생시킨다', async () => {
    Console.readLineAsync.mockResolvedValue('Car1, ,Car3');
    await expect(racingController.inputCarNames()).rejects.toThrow(
      ERROR_MESSAGE.inputNameError,
    );
  });

  test('inputCount()에서 올바른 횟수 입력 시 숫자 값을 반환한다', async () => {
    Console.readLineAsync.mockResolvedValue('5');
    const count = await racingController.inputCount();
    expect(count).toBe(5);
  });

  test('inputCount()에서 잘못된 횟수 입력 시 오류를 발생시킨다', async () => {
    Console.readLineAsync.mockResolvedValue('-3');
    await expect(racingController.inputCount()).rejects.toThrow(
      ERROR_MESSAGE.inputCountError,
    );
  });

  test('start() 메서드가 실행되면 RacingModel, RacingView, Console 호출 순서가 올바르게 진행된다', async () => {
    RacingModel.mockImplementation(() => ({
      count: 2,
      race: jest.fn(),
      getCars: jest.fn(() => [
        {
          getName: jest.fn(() => 'pobi'),
          getPositionString: jest.fn(() => '--'),
        },
        {
          getName: jest.fn(() => 'wook'),
          getPositionString: jest.fn(() => '---'),
        },
      ]),
      getWinners: jest.fn(() => ['pobi']),
    }));

    Console.readLineAsync.mockResolvedValueOnce('pobi,wook,jay');
    Console.readLineAsync.mockResolvedValueOnce('5');

    await racingController.start();

    expect(Console.print).toHaveBeenCalledWith('\n실행 결과');
    expect(RacingView.printRaceStatus).toHaveBeenCalled();
    expect(RacingView.printWinners).toHaveBeenCalledWith(['pobi']);
  });
});
