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

  test('예외 테스트: 이름이 5자를 초과할 때', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
  });
  
  test('예외 테스트: 이름이 공백일 때', async () => {
    //given
    const inputs = ['pobi,,woni'];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
  });

  test('예외 테스트: 쉼표가 없을 때', async () => {
    //given
    const inputs = ['pobi.woni'];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow('[ERROR] 입력 형식에 맞지 않습니다.');
  });

  test('예외 테스트: 중복된 이름이 있을 때', async () => {
    //given
    const inputs = ['pobi,pobi'];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow('[ERROR] 중복된 이름이 있습니다.');
  });

  test('예외 테스트: 경주 횟수가 숫자가 아닐 때', async () => {
    //given
    const inputs = ['pobi,woni', 'three'];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow('[ERROR] 0보다 큰 정수를 입력해주세요.');
  });

  test('예외 테스트: 경주 횟수가 양의 정수가 아닐 때', async () => {
    //given
    const inputs = ['pobi,woni', '0'];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow('[ERROR] 0보다 큰 정수를 입력해주세요.');
  });

});
