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
  let logSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks(); // 모든 스파이와 모킹 초기화

    logSpy = jest.spyOn(MissionUtils.Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks(); // 모든 모킹된 함수와 스파이 초기화
  });

  test('공동 우승자인 경우 함께 우승자들이 출력된다.', async () => {
    const carNamesInput = 'yerim, envi';
    const racingCountInput = '1';
    const randomNum = [5, 9]; // 4 이상인 경우 전진으로 인식

    mockQuestions([carNamesInput, racingCountInput]);
    mockRandoms(randomNum);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('yerim : -'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('envi : -'));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('최종 우승자 : yerim, envi'));
  });
});
