import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, IO_MESSAGE } from '../src/common/message.js';
import Car from '../src/car/Car.js';

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
  test('입력 테스트', async () => {
    const app = new App();
    const inputs = ['test'];
    mockQuestions(inputs);
    const NAMES = await app.getInput(IO_MESSAGE.INPUT_CAR_NAME);
    expect(NAMES).toEqual('test');
  });

  test('자동차 생성 테스트', async () => {
    const car = new Car('test');
    expect(car._name).toEqual('test');
    expect(car._count).toBe(0);
  });

  test('자동차 생성 예외 테스트(5자 초과)', async () => {
    const names = ['asdfad', 'ㅁㄴㅇㅁㄴㅇ', '123123', 'as12ㅁㄴ'];
    names.forEach(name => {
      expect(() => {
        new Car(name);
      }).toThrow(ERROR_MESSAGE.ERROR_TOO_LONG_CAR_NAME);
    });
  });

  test('자동차 생성 예외 테스트(빈 문자열, null)', async () => {
    const names = ['', null];
    names.forEach(name => {
      expect(() => {
        new Car(name);
      }).toThrow();
    });
  });

  test('자동차 생성 예외 테스트(한글, 숫자, 영어 이외)', async () => {
    const names = ['     ', 'asd_', 'a_sd', '_asd', '_ㅁㄴㅇ', '_123', 'asd!', 'asd👍', '^_^'];
    names.forEach(name => {
      expect(() => {
        new Car(name);
      }).toThrow(ERROR_MESSAGE.ERROR_NOT_ALLOWED_CHARACTER);
    });
  });

  test('랜덤 테스트(전진)', async () => {
    const car = new Car('test');
    const numbers = [4, 5, 6, 7, 8, 9];
    mockRandoms(numbers);
    numbers.forEach((number, idx) => {
      car.run();
      expect(car._count).toBe(idx + 1);
    });
  });

  test('랜덤 테스트(유지)', async () => {
    const car = new Car('test');
    const numbers = [0, 1, 2, 3];
    mockRandoms(numbers);
    numbers.forEach(() => {
      car.run();
      expect(car._count).toBe(0);
    });
  });

  test("중간 결과 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : "];
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

  // test("기능 테스트", async () => {
  //   // given
  //   const MOVING_FORWARD = 4;
  //   const STOP = 3;
  //   const inputs = ["pobi,woni", "1"];
  //   const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
  //   const logSpy = getLogSpy();
  //
  //   mockQuestions(inputs);
  //   mockRandoms([MOVING_FORWARD, STOP]);
  //
  //   // when
  //   const app = new App();
  //   await app.run();
  //
  //   // then
  //   logs.forEach((log) => {
  //     expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  //   });
  // });
  //
  // test("예외 테스트", async () => {
  //   // given
  //   const inputs = ["pobi,javaji"];
  //   mockQuestions(inputs);
  //
  //   // when
  //   const app = new App();
  //
  //   // then
  //   await expect(app.run()).rejects.toThrow("[ERROR]");
  // });
});
