import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import { validateCars, validateCount } from '../src/validate.js';
import { moveCars, parseStringToObject } from '../src/racing.js';
import { getInputCars, getInputCount, input } from '../src/input.js';
import { printProgress, printResult } from '../src/output.js';

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

describe('입력값 검증 (validate.js)', () => {
  describe('자동차 이름 입력 검증', () => {
    test('정상적인 자동차 이름 입력', () => {
      expect(validateCars('pobi,woni')).toBe('pobi,woni');
    });

    test('빈 문자열 입력시 에러 발생', () => {
      expect(() => validateCars('')).toThrow('[ERROR]');
    });

    test('5글자 초과된 이름이 있으면 에러 발생', () => {
      expect(() => validateCars('pobi,superman')).toThrow('[ERROR]');
    });

    test('특수문자가 포함된 이름이면 에러 발생', () => {
      expect(() => validateCars('pobi,wo!ni')).toThrow('[ERROR]');
    });
  });

  describe('입력 횟수 입력 검증', () => {
    test('정상적인 횟수 입력', () => {
      expect(validateCount('3')).toBe('3');
    });

    test('빈 문자열 입력시 에러 발생', () => {
      expect(() => validateCount('')).toThrow('[ERROR]');
    });

    test('숫자가 아닌 값 입력시 에러 발생', () => {
      expect(() => validateCount('abc')).toThrow('[ERROR]');
    });
  });
});

describe('자동차 이동 (racingCars.js)', () => {
  test('문자열을 객체 배열로 변환', () => {
    const result = parseStringToObject('pobi,woni');
    expect(result).toEqual([
      { name: 'pobi', distance: 0 },
      { name: 'woni', distance: 0 },
    ]);
  });

  test('자동차 이동 (4이상)', () => {
    mockRandoms([4]);

    const cars = [{ name: 'pobi', distance: 0 }];
    const result = moveCars(cars);
    expect(result[0].distance).toBe(1);
    expect(cars[0].distance).toBe(0);
  });

  test('자동차 정지 (3이하)', () => {
    mockRandoms([3]);

    const cars = [{ name: 'pobi', distance: 0 }];
    const result = moveCars(cars);
    expect(result[0].distance).toBe(0);
    expect(cars[0].distance).toBe(0);
  });
});

describe('입력 처리 (input.js)', () => {
  test('정상적인 입력 처리', async () => {
    const inputs = ['pobi,woni', '3'];
    mockQuestions(inputs);

    const result = await input();
    expect(result).toEqual({
      cars: 'pobi,woni',
      count: '3',
    });
  });

  test('자동차 이름 입력 받기', async () => {
    const inputs = ['pobi,woni'];
    mockQuestions(inputs);

    const cars = await getInputCars();
    expect(cars).toBe('pobi,woni');
  });

  test('시도 횟수 입력 받기', async () => {
    const inputs = ['3'];
    mockQuestions(inputs);

    const count = await getInputCount();
    expect(count).toBe('3');
  });
});

describe('출력 처리 (output.js)', () => {
  const logSpy = getLogSpy();

  test('진행상황 출력', () => {
    const cars = [
      { name: 'pobi', distance: 2 },
      { name: 'woni', distance: 1 },
    ];

    printProgress(cars);

    expect(logSpy).toHaveBeenCalledWith('pobi : --');
    expect(logSpy).toHaveBeenCalledWith('woni : -');
  });

  test('단독 우승자 결과 출력', () => {
    const cars = [
      { name: 'pobi', distance: 3 },
      { name: 'woni', distance: 2 },
    ];

    printResult(cars);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi');
  });

  test('공동 우승자 결과 출력', () => {
    const cars = [
      { name: 'pobi', distance: 3 },
      { name: 'woni', distance: 3 },
    ];

    printResult(cars);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi,woni');
  });
});
