import { MissionUtils } from '@woowacourse/mission-utils';
import { getUserCarName, displayRaceState } from '../src/views/View.js';
import {
  splitCarNamesByDelimiter,
  createCarDataArray,
  updateCarDataPositions,
  formatAllCarPositions,
  findCarWinners,
} from '../src/models/Model.js';
import App from '../src/App.js';
import {
  validateCarNames,
  validateRaceCountInput,
} from '../src/models/ErrorHandler.js';

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
const CAR_MOVES = { names: ['happy', 'car'], positions: [1, 0] };

const testCar = (description, fn, input, expectedOutput) => {
  test(description, () => {
    const result = fn(input);
    expect(result).toEqual(expectedOutput);
  });
};

describe('Custom Test', () => {
  test.each([
    [CAR_NAMES_STRING, CAR_NAMES_STRING, getUserCarName],
    [
      'happy,helloo',
      '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.',
      validateCarNames,
    ],
    ['', '[ERROR] 정확한 이름을 입력해주세요.', validateCarNames],
    [' ,happy', '[ERROR] 정확한 이름을 입력해주세요.', validateCarNames],
    [
      'c',
      '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)',
      validateRaceCountInput,
    ],
    [
      '-1',
      '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)',
      validateRaceCountInput,
    ],
    [
      '0',
      '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)',
      validateRaceCountInput,
    ],
    [
      '1 0',
      '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)',
      validateRaceCountInput,
    ],
    [
      '',
      '[ERROR] 경주 횟수는 양의 정수로 입력해야 합니다. (0, 음수, 문자, 띄어쓰기 입력 불가)',
      validateRaceCountInput,
    ],
    [
      '101',
      '[ERROR] 최대 100 이하의 숫자만 입력할 수 있습니다.',
      validateRaceCountInput,
    ],
  ])('사용자 입력 확인', async (inputData, expectedOutput, fn) => {
    const consoleSpy = jest
      .spyOn(MissionUtils.Console, 'readLineAsync')
      .mockImplementation(() => Promise.resolve(inputData));

    if (expectedOutput.startsWith('[ERROR]')) {
      await expect(async () => {
        const input = await getUserCarName();
        fn(input.split(','));
      }).rejects.toThrow(expectedOutput);
    } else {
      const input = await fn();

      expect(input).toBe(expectedOutput);
    }

    consoleSpy.mockRestore();
  });

  testCar(
    '사용자가 입력한 차 쉼표로 구분',
    splitCarNamesByDelimiter,
    CAR_NAMES_STRING,
    CAR_NAMES_ARRAY,
  );

  testCar('자동차 객체 생성', createCarDataArray, CAR_NAMES_ARRAY, CAR_OBJECTS);

  test('랜덤 값을 이용해 자동차의 전진 수를 올바르게 업데이트하는지 확인', () => {
    const randomSpy = jest.spyOn(MissionUtils.Random, 'pickNumberInRange');
    randomSpy.mockImplementationOnce(() => 4).mockImplementationOnce(() => 3);
    expect(updateCarDataPositions(CAR_OBJECTS)).toEqual(CAR_MOVES);

    randomSpy.mockRestore();
  });

  test('move 수 만큼 -로 변환', () => {
    const expectedOutput = ['happy : -', 'car : '];
    expect(formatAllCarPositions(CAR_MOVES)).toEqual(expectedOutput);
  });

  test('현재 게임 상태 출력', () => {
    const carData = ['car1 : --', 'car2 : ---'];
    const logSpy = getLogSpy();
    displayRaceState(carData);
    expect(logSpy).toHaveBeenCalledWith('car1 : --');
    expect(logSpy).toHaveBeenCalledWith('car2 : ---');
    expect(logSpy).toHaveBeenCalledWith('');
  });

  test.each([
    // [자동차 데이터, 기대 값]
    [{ names: ['happy', 'car', 'fast'], positions: [5, 3, 2] }, ['happy']],
    [
      { names: ['happy', 'car', 'fast'], positions: [5, 5, 2] },
      ['happy', 'car'],
    ],
    [
      { names: ['one', 'two', 'three'], positions: [1, 1, 1] },
      ['one', 'two', 'three'],
    ],
  ])('우승자 찾기', (carData, expectedWinners) => {
    expect(findCarWinners(carData)).toEqual(expectedWinners);
  });
});
