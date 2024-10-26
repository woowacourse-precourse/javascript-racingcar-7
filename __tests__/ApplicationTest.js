import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App';
import { ERROR_MESSAGE } from '../src/common/message';
import Car from '../src/car/Car';

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
  test('입력 테스트(자동차)', async () => {
    const app = new App();
    const inputs = ['test'];
    mockQuestions(inputs);
    await app.setCars();
    expect(app.CARS[0].name).toEqual('test');
  });

  test('입력 테스트(시도 횟수)', async () => {
    const app = new App();
    const inputs = ['300'];
    mockQuestions(inputs);
    await app.setTryCount();
    expect(app.TRY_COUNT).toEqual(300);
  })

  test('자동차 생성 테스트', async () => {
    const car = new Car('test');
    expect(car.name).toEqual('test');
    expect(car.count).toBe(0);
  });

  test('랜덤 테스트(전진)', async () => {
    const car = new Car('test');
    const numbers = [4, 5, 6, 7, 8, 9];
    mockRandoms(numbers);
    numbers.forEach((number, idx) => {
      car.tryMove();
      expect(car.count).toBe(idx + 1);
    });
  });

  test('랜덤 테스트(유지)', async () => {
    const car = new Car('test');
    const numbers = [0, 1, 2, 3];
    mockRandoms(numbers);
    numbers.forEach(() => {
      car.tryMove();
      expect(car.count).toBe(0);
    });
  });

  test('중간 결과 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : '];
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

  test('단일 우승 테스트', async () => {
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

  test('공동 우승 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('자동차 경주 예외', () => {
  test('입력(자동차) 예외 테스트(빈 문자열)', async ()=> {
    const inputs = ['', null];
    mockQuestions([...inputs]);
    const app = new App();
    inputs.forEach(async () => {
      await expect(app.setCars()).rejects.toThrow(ERROR_MESSAGE.EMPTY_STRING);
    });
  });

  test('입력(시도 횟수) 예외 테스트(빈 문자열)', async ()=> {
    const inputs = ['', null, undefined];
    mockQuestions([...inputs]);
    const app = new App();
    inputs.forEach(async () => {
      await expect(app.setTryCount()).rejects.toThrow(ERROR_MESSAGE.EMPTY_STRING);
    });
  });

  test('입력(시도 횟수) 예외 테스트(숫자가 아닌 값)', async ()=> {
    const inputs = ['값', 'value', '12a', 'a12', '✌️✌️', ';)', '1+2', '1-2'];
    mockQuestions([...inputs]);
    const app = new App();
    inputs.forEach(async () => {
      await expect(app.setTryCount()).rejects.toThrow(ERROR_MESSAGE.INVALID_NUMBER);
    });
  });

  test('입력(시도 횟수) 예외 테스트(양의 정수가 아닌 값)', async ()=> {
    const inputs = ['-1', '0', '1.23', '0.0', '-0', '+0', '-1.23'];
    mockQuestions([...inputs]);
    const app = new App();
    inputs.forEach(async () => {
      await expect(app.setTryCount()).rejects.toThrow(ERROR_MESSAGE.NOT_POSITIVE_INTEGER);
    });
  });

  test('입력(시도 횟수) 예외 테스트(너무 큰 값)', async ()=> {
    const inputs = ['301', '999999999999999999999999999999', '999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999'];
    mockQuestions([...inputs]);
    const app = new App();
    inputs.forEach(async () => {
      await expect(app.setTryCount()).rejects.toThrow(ERROR_MESSAGE.TOO_BIG_TRY_COUNT);
    });
  });

  test('자동차 생성 예외 테스트(5자 초과)', async () => {
    const names = ['asdfad', 'ㅁㄴㅇㅁㄴㅇ', '123123', 'as12ㅁㄴ'];
    names.forEach((name) => {
      expect(() => {
        new Car(name);
      }).toThrow(ERROR_MESSAGE.TOO_LONG_CAR_NAME);
    });
  });

  test('자동차 생성 예외 테스트(빈 문자열, null)', async ()=> {
    const names = ['', null];
    names.forEach((name) => {
      expect(() => {
        new Car(name);
      }).toThrow(ERROR_MESSAGE.EMPTY_CAR_NAME);
    });
  });

  test('자동차 생성 예외 테스트(한글, 숫자, 영어 이외)', async () => {
    const names = ['     ', 'asd_', 'a_sd', '_asd', '_ㅁㄴㅇ', '_123', 'asd!', 'asd👍', '^_^'];
    names.forEach((name) => {
      expect(() => {
        new Car(name);
      }).toThrow(ERROR_MESSAGE.NOT_ALLOWED_CHARACTER);
    });
  });
});
