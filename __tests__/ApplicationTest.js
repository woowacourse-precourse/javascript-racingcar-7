import { MissionUtils } from '@woowacourse/mission-utils';
import { getUserInput } from '../src/views/View.js';
import {
  divisionCarName,
  createCarObject,
  moveCars,
} from '../src/models/Model.js';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
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

// ------커스텀 테스트-----

const CAR_NAMES_STRING = 'happy,car';
const CAR_NAMES_ARRAY = ['happy', 'car'];
const CAR_OBJECTS = { names: ['happy', 'car'], positions: [0, 0] };

const testCar = (description, fn, input, expectedOutput) => {
  test(description, () => {
    const result = fn(input);
    expect(result).toEqual(expectedOutput);
  });
};

describe('Custom Test', () => {
  test('사용자 입력 확인', async () => {
    const consoleSpy = jest
      .spyOn(MissionUtils.Console, 'readLineAsync')
      .mockImplementation(() => Promise.resolve(CAR_NAMES_STRING));
    const input = await getUserInput();
    expect(input).toBe(CAR_NAMES_STRING);
    consoleSpy.mockRestore();
  });

  testCar(
    '사용자가 입력한 차 쉼표로 구분',
    divisionCarName,
    CAR_NAMES_STRING,
    CAR_NAMES_ARRAY,
  );

  // createCarObject 테스트
  testCar('자동차 객체 생성', createCarObject, CAR_NAMES_ARRAY, CAR_OBJECTS);

  // moveCars 테스트
  test('랜덤 값을 이용해 자동차의 전진 수를 올바르게 업데이트하는지 확인', () => {
    // Mock 처리로 랜덤 값을 고정하여 테스트의 일관성 유지
    const randomSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');

    // 랜덤 값을 [4, 3, 5]로 고정 설정 (4 이상일 때 전진, 4 미만일 때 그대로)
    randomSpy.mockImplementationOnce(() => 4).mockImplementationOnce(() => 3);

    const expectedOutput = {
      names: CAR_NAMES_ARRAY,
      positions: [1, 0], // 첫 번째와 세 번째 자동차만 전진
    };

    expect(moveCars(CAR_OBJECTS)).toEqual(expectedOutput);

    // Mock 복원
    randomSpy.mockRestore();
  });
});
