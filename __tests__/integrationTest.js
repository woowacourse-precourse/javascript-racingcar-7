import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),

    MissionUtils.Random.pickNumberInRange,
  );
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 입력 받기', () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print').mockImplementation(() => {});

  test('3번의 경기 후 최종 우승자가 정확하게 출력된다.', async () => {
    const carNamesInput = 'pobi, jinny, bummy';
    const racingCountInput = '3';
    const expectedLogs = ['pobi : --', 'jinny : -', 'bummy : ---', '최종 우승자 : bummy'];
    const randomNum = [9, 6, 5, 5, 2, 5, 1, 3, 5];

    mockQuestions([carNamesInput, racingCountInput]);
    mockRandoms(randomNum);

    const app = new App();
    await app.run();

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
