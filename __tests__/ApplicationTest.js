import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    ['pobi,javaji', '[ERROR] 이름은 5자 이하만 가능합니다.'],
    ['', '[ERROR] 입력된 값이 없습니다.'],
    ['pobi, javaji', '[ERROR] 공백은 입력할 수 없습니다.'],
    ['pobi,,javaji', '[ERROR] 쉼표 다음에 반드시 이름을 입력해야 합니다.'],
    [',', '[ERROR] 이름을 필수로 입력해야 합니다.'],
    ['pobi,javaji,pobi', '[ERROR] 중복된 이름이 존재합니다.'],
  ])('예외 테스트: %s', async (input, expectedError) => {
    // given
    mockQuestions([input, '1']);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    ['abc', '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.'],
    ['0', '[ERROR] 양수만 입력할 수 있습니다.'],
    ['', '[ERROR] 입력된 값이 없습니다.'],
    [' 5', '[ERROR] 공백은 입력할 수 없습니다.'],
  ])('예외 테스트: 시도할 횟수 %s', async (input, expectedError) => {
    // given
    mockQuestions(['pobi,woni', input]);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
