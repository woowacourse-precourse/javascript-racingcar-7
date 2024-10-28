import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { getCarNames } from '../src/input.js';

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

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('자동차 이름 입력 파싱 테스트', () => {
  test('쉼표 사이에 공백, 입력값 마지막에 쉼표 있을 경우 올바르게 파싱되는지 확인', async () => {
    // Given
    mockQuestions(['pobi, , jun,']);

    // When
    const carNames = await getCarNames();

    // Then
    expect(carNames).toEqual(['pobi', 'jun']); // 빈 문자열이 제거된 배열과 같은지 확인
  });

  test('중복값이 있을 경우 올바르게 파싱되는지 확인', async () => {
    // Given
    mockQuestions(['pobi, jun, jun']);

    // When
    const carNames = await getCarNames();

    // Then
    expect(carNames).toEqual(['pobi', 'jun']); // 빈 문자열이 제거된 배열과 같은지 확인
  });
});

describe('자동차 이름 입력 파싱 테스트', () => {
  test('쉼표 사이에 공백, 입력값 마지막에 쉼표 있을 경우 올바르게 파싱되는지 확인', async () => {
    // Given
    mockQuestions(['pobi, , jun,']);

    // When
    const carNames = await getCarNames();

    // Then
    expect(carNames).toEqual(['pobi', 'jun']); // 빈 문자열이 제거된 배열과 같은지 확인
  });

  test('이동횟수에 0 이하의 수를 입', async () => {
    // Given
    mockQuestions(['pobi, jun, jun']);

    // When
    const carNames = await getCarNames();

    // Then
    expect(carNames).toEqual(['pobi', 'jun']); // 빈 문자열이 제거된 배열과 같은지 확인
  });
});

describe('자동차 경주 예외 처리 테스트(사용자 입력값 관련)', () => {
  test.each([
    // 자동차 이름이 5자 초과일 때
    { inputs: ['pobi,javaji'], expectedError: '[ERROR]' },
    // 자동차 이름을 입력하지 않은 경우
    { inputs: [''], expectedError: '[ERROR]' },
    { inputs: [',,'], expectedError: '[ERROR]' },
    { inputs: ['  '], expectedError: '[ERROR]' },
    // 이동 횟수가 숫자가 아닌 경우
    { inputs: ['pobi,jun', 'abc'], expectedError: '[ERROR]' },
    // 이동 횟수가 0 이하인 경우
    { inputs: ['pobi, jun', -3], expectedError: '[ERROR]' },
    // 이동 횟수를 입력하지 않는 경우
    { inputs: ['pobi, jun'], expectedError: '[ERROR]' },
  ])('예외 상황 테스트 - %s', async ({ inputs, expectedError }) => {
    // Given
    mockQuestions(inputs);
    const app = new App();

    // Then
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
