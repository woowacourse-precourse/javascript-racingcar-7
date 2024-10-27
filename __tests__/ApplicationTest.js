import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import NameValidator from '../src/utils/validators/NameValidator.js';
import GameController from '../src/controller/GameController.js';
import GameCountValidator from '../src/utils/validators/GameCountValidator.js';

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

describe('자동차 이름 검증', () => {
  let nameValidator;

  beforeEach(() => {
    nameValidator = new NameValidator();
  });

  test('자동차 이름이 5글자 초과일 때, 에러 처리', async () => {
    const inputs = ['우테코,합격하고싶어요'];

    await expect(async () => {
      await nameValidator.runAllFunction(inputs);
    }).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름에 쉼표 아닌 다른 구분자가 있는 경우, 에러 처리', async () => {
    const inputs = ['우테코.,합격기원'];

    await expect(async () => {
      await nameValidator.runAllFunction(inputs);
    }).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름에 공백이 있는 경우, 에러 처리', async () => {
    const inputs = ['우테코,'];

    await expect(async () => {
      await nameValidator.runAllFunction(inputs);
    }).rejects.toThrow('[ERROR]');
  });
});

describe('게임 횟수 검증', () => {
  let gameCountValidator;

  beforeEach(() => {
    gameCountValidator = new GameCountValidator();
  });

  test('게임 횟수가 공백인 경우, 에러 처리', async () => {
    const inputs = '';

    await expect(async () => {
      await gameCountValidator.runAllFunction(inputs);
    }).rejects.toThrow('[ERROR]');
  });

  test('게임 횟수가 영어로 입력한 경우, 에러 처리', async () => {
    const inputs = 'abc';

    await expect(async () => {
      await gameCountValidator.runAllFunction(inputs);
    }).rejects.toThrow('[ERROR]');
  });

  test('게임 횟수가 한글로 입력한 경우, 에러 처리', async () => {
    const inputs = '가나다';

    await expect(async () => {
      await gameCountValidator.runAllFunction(inputs);
    }).rejects.toThrow('[ERROR]');
  });
});
