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

  test('예외 테스트 1 [이름 5글자 초과]', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR] 이름은 5글자를 초과할 수 없습니다.'
    );
  });

  test('예외 테스트 2 [이름 공백]', async () => {
    const inputs = ['pobi, ,   , java'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 공백은 이름이 될 수 없습니다.'
    );
  });

  test('예외 테스트 3 [연속적인 쉼표 입력]', async () => {
    const inputs = ['pobi,,java'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 공백은 이름이 될 수 없습니다.'
    );
  });

  test('예외 테스트 4 [이름 중복 1]', async () => {
    const inputs = ['pobi, java, java'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 중복된 이름이 있습니다.');
  });

  test('예외 테스트 5 [이름 중복 2]', async () => {
    const inputs = ['pobi, java, pobi'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 중복된 이름이 있습니다.');
  });

  test('예외 테스트 6 [횟수 음수 입력]', async () => {
    const inputs = ['pobi, java', '-1'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 음수를 입력할 수 없습니다.'
    );
  });

  test('예외 테스트 7 [횟수 숫자가 아닌 값 입력 1]', async () => {
    const inputs = ['pobi, java', 'a'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('예외 테스트 8 [횟수 숫자가 아닌 값 입력 2]', async () => {
    const inputs = ['pobi, java', '*'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('예외 테스트 9 [횟수 숫자가 아닌 값 입력 3]', async () => {
    const inputs = ['pobi, java', 'string'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 숫자를 입력해주세요.');
  });

  test('예외 테스트 10 [이름 마지막에 쉼표 입력]', async () => {
    const inputs = ['pobi,java,c,'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 공백은 이름이 될 수 없습니다.'
    );
  });
});
