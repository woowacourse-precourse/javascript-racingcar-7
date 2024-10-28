import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import RacingCar from '../src/Models/RacingCar.js';

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

  describe('Model 테스트', () => {
    describe('Racing Car', () => {
      test('Car를 생성했을 떄 이름과 이동 거리에 대한 정보를 가지고 있다.', async () => {
        // given
        const carName = 'benz';

        // when
        const car = new RacingCar(carName);

        // then
        await expect(car.name).toBe(carName);
        await expect(car.movedDistance).toBe(0);
      });

      test.each([1, 3, 5])(
        'Car가 %s만큼 움직인 값을 저장하고 있다.',
        async (moveCount) => {
          // given
          const carName = 'benz';

          // when
          const car = new RacingCar(carName);
          for (let i = 0; i < moveCount; i++) {
            car.move();
          }

          // then
          await expect(car.movedDistance).toBe(moveCount);
        },
      );
    });
  });

  describe('예외 테스트', () => {
    describe('입력 예외 테스트', () => {
      test('자동차 이름이 5글자 이상 되었을 때 에러를 발생시킨다.', async () => {
        // given
        const inputs = ['pobi,javaji'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('자동차 이름이 1글자 미만으로 입력되었을 때 에러를 발생시킨다.', async () => {
        // given
        const inputs = [',benz'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('빈 문자열이 자동차 이름으로 입력되었을 때 에러를 발생시킨다.', async () => {
        // given
        const inputs = [''];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('자동차가 2대 이상 입력되지 않았을 때 에러를 발생시킨다.', async () => {
        // given
        const inputs = ['benz'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('자동차가 2대 이상 입력되지 않았을 때 에러를 발생시킨다.', async () => {
        // given
        const inputs = ['benz,benz,audi'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('시도 횟수가 숫자가 아닌 문자가 들어오는 경우 에러를 발생시킨다.', async () => {
        // given
        const inputs = ['benz,audi', 'k'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('시도 횟수가 실수로 들어오는 경우 에러를 발생한다.', async () => {
        // given
        const inputs = ['benz,audi', '1.1'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });

      test('시도 횟수가 음수로 들어오는 경우 에러를 발생시킨다.', async () => {
        // given
        const inputs = ['benz,audi', '-1'];
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow('[ERROR]');
      });
    });
  });
});
