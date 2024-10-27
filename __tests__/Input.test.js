import App from '../src/App.js';
import Console from '../src/game/utils/Console.js';
import RandomNumber from '../src/game/utils/RandomNumber.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockCarNamesQuestion = (input) => {
  Console.getCarNames = jest.fn(() => Promise.resolve(input));
};

const mockTotalRoundsQuestion = (input) => {
  Console.getTotalRounds = jest.fn(() => Promise.resolve(input));
};

const mockRandoms = (numbers) => {
  RandomNumber.generateNumberZeroToNine = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, RandomNumber.generateNumberZeroToNine);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('예외 테스트', () => {
  describe('자동차 이름 입력 테스트', () => {
    const failCases = [
      {
        name: '자동차 이름에 공백 입력',
        carNamesInput: ' ,tom',
        totalRoundsInput: '3',
        errorMessage: '[ERROR] 자동차 이름에 공백을 입력하였습니다.',
      },
      {
        name: '자동차 이름을 6자 이상으로 입력',
        carNamesInput: 'racingcar,tom',
        totalRoundsInput: '3',
        errorMessage: '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.',
      },
      {
        name: '자동차 이름을 중복으로 입력',
        carNamesInput: 'tom,tom',
        totalRoundsInput: '3',
        errorMessage: '[ERROR] 중복된 자동차 이름 : tom',
      },
    ];

    failCases.forEach(
      ({ name, carNamesInput, totalRoundsInput, errorMessage }) => {
        test(name, async () => {
          // given
          mockCarNamesQuestion(carNamesInput);
          mockTotalRoundsQuestion(totalRoundsInput);

          // when
          const app = new App();

          // then
          await expect(app.run()).rejects.toThrow(errorMessage);
        });
      }
    );
  });

  describe('시도할 횟수 입력 테스트', () => {
    const failCases = [
      {
        name: '시도할 횟수 음수 입력',
        carNamesInput: 'tom,jerry',
        totalRoundsInput: '-1',
        errorMessage: '[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.',
      },
      {
        name: '시도할 횟수 0 입력',
        carNamesInput: 'tom,jerry',
        totalRoundsInput: '0',
        errorMessage: '[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.',
      },
      {
        name: '시도할 횟수에 문자 입력',
        carNamesInput: 'tom,jerry',
        totalRoundsInput: 'r',
        errorMessage: '[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.',
      },
      {
        name: '시도할 횟수에 공백 입력',
        carNamesInput: 'tom,jerry',
        totalRoundsInput: '',
        errorMessage: '[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.',
      },
      {
        name: '시도할 횟수에 개행문자 입력',
        carNamesInput: 'tom,jerry',
        totalRoundsInput: '\n',
        errorMessage: '[ERROR] 시도 횟수는 1 이상의 정수를 입력해야 합니다.',
      },
    ];

    failCases.forEach(
      ({ name, carNamesInput, totalRoundsInput, errorMessage }) => {
        test(name, async () => {
          // given
          mockCarNamesQuestion(carNamesInput);
          mockTotalRoundsQuestion(totalRoundsInput);

          // when
          const app = new App();

          // then
          await expect(app.run()).rejects.toThrow(errorMessage);
        });
      }
    );
  });
});

describe('기능 테스트', () => {
  const successCases = [
    {
      name: '우승자가 여러 명일 경우',
      carNamesInput: 'tom,jerry',
      totalRoundsInput: '1',
      logs: ['tom : -', 'jerry : -', '최종 우승자 : tom, jerry'],
    },
  ];

  successCases.forEach(({ name, carNamesInput, totalRoundsInput, logs }) => {
    test(name, async () => {
      // given
      const MOVING_FORWARD = 4;
      const logSpy = getLogSpy();

      mockCarNamesQuestion(carNamesInput);
      mockTotalRoundsQuestion(totalRoundsInput);
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
});
