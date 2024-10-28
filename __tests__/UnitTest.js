import { MissionUtils } from '@woowacourse/mission-utils';
import { getCarsname, getTimes } from '../src/input';
import { printWinner } from '../src/print';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

describe('입력 기능 테스트', () => {
  test('getCarsname - 입력 테스트', async () => {
    const cars = 'car1,car2,car3';

    mockQuestions(cars);

    const result = await getCarsname();

    expect(result).toEqual(['car1', 'car2', 'car3']);
  });

  test('getTimes - 입력 테스트', async () => {
    const times = 10;

    mockQuestions(times);

    const result = await getTimes();

    expect(result).toEqual(10);
  });

  test('getTimes - 예외 테스트', async () => {
    const inputs = [0, 'notANumber', ''];

    for (const input of inputs) {
      mockQuestions(input);

      await expect(getTimes()).rejects.toThrow('[ERROR] getTimes');
    }
  });
});

describe('출력 기능 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('printWinner - 출력 테스트1', () => {
    const logSpy = jest
      .spyOn(MissionUtils.Console, 'print')
      .mockImplementation();

    const winner = ['jun'];
    printWinner(winner);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : jun');

    logSpy.mockRestore();
  });

  test('printWinner - 출력 테스트2', () => {
    const logSpy = jest
      .spyOn(MissionUtils.Console, 'print')
      .mockImplementation();

    const winner = ['jun', 'magik'];
    printWinner(winner);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : jun, magik');

    logSpy.mockRestore();
  });
});
