import { Console, Random } from '@woowacourse/mission-utils';
import RacingCarService from '../src/service/RacingCarService.js';
import { InputView } from '../src/view/InputView.js';
import { OutputView } from '../src/view/OutputView.js';
import RacingCarController from '../src/controller/RacingCarController.js';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('RacingCarController 클래스 테스트', () => {
  test.each([
    {
      inputs: ['pobi,woni,yeon', 2],
      randomValue: [5, 1, 7, 4, 4, 6],
      logs: [
        'pobi : -',
        'woni : ',
        'yeon : -',
        'pobi : --',
        'woni : -',
        'yeon : --',
        '최종 우승자 : pobi, yeon',
      ],
    },
    {
      inputs: ['pobi,woni,yeon', 2],
      randomValue: [6, 6, 9, 5, 6, 6],
      logs: [
        'pobi : -',
        'woni : -',
        'yeon : -',
        'pobi : --',
        'woni : --',
        'yeon : --',
        '최종 우승자 : pobi, woni, yeon',
      ],
    },
  ])('실제 어플리케이션 동작 테스트', async ({ inputs, randomValue, logs }) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randomValue);

    const racingCarController = new RacingCarController(
      new RacingCarService(),
      new InputView(),
      new OutputView(),
    );
    await racingCarController.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
