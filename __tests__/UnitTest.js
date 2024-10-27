import App from '../src/App.js';
import { Console } from '@woowacourse/mission-utils';
import {
  validateCarNamesInput,
  validateAttemptCount,
} from '../src/validator.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('validator 테스트', () => {
  test('자동차 이름 예외 테스트', () => {
    const inputs = [
      'pobi,javaji',
      'pobi',
      'pobi,a',
      'pobi,@&@&@',
      'pobi,pobi',
      'pobi,',
      'pobi,121212',
      '',
    ];

    inputs.forEach((input) => {
      expect(() => validateCarNamesInput(input)).toThrow('[ERROR]');
    });
  });

  test('자동차 이름 정상 테스트', () => {
    const inputs = ['pobi,java', 'pobi,woni,a1212', 'pobi,java,woni'];

    inputs.forEach((input) => {
      expect(() => validateCarNamesInput(input)).not.toThrow();
    });
  });

  test('시도할 횟수 예외 테스트', () => {
    const inputs = ['-1', '', '1.2', '11', '0', 'a', '.2'];

    inputs.forEach((input) => {
      expect(() => validateAttemptCount(input)).toThrow('[ERROR]');
    });
  });

  test('시도할 횟수 정상 테스트', () => {
    const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    inputs.forEach((input) => {
      expect(() => validateAttemptCount(input)).not.toThrow();
    });
  });
});

describe('App 메서드 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('자동차 이름 입력 -> carsData 변환 테스트', () => {
    const input = 'pobi,java';
    const expected = [
      { name: 'pobi', position: 0 },
      { name: 'java', position: 0 },
    ];

    const result = app.changeCarNamesInputToCarsData(input);

    expect(result).toEqual(expected);
  });

  test('자동차 이동 정지 테스트', () => {
    const car = { name: 'pobi', position: 0 };
    const MOVE = true;
    const STOP = false;

    app.moveOrStop(car, STOP);
    expect(car.position).toBe(0);

    app.moveOrStop(car, MOVE);
    expect(car.position).toBe(1);

    app.moveOrStop(car, MOVE);
    expect(car.position).toBe(2);
  });

  test('우승자 선별 테스트', () => {
    const carsData = [
      [
        { name: 'pobi', position: 2 },
        { name: 'woni', position: 1 },
      ],
      [
        { name: 'pobi', position: 2 },
        { name: 'woni', position: 2 },
      ],
    ];
    const expects = [['pobi'], ['pobi', 'woni']];

    carsData.forEach((data, index) => {
      const result = app.getWinners(data);
      expect(result).toEqual(expects[index]);
    });
  });

  describe('print 메서드 테스트', () => {
    test('우승자 출력 테스트', () => {
      const inputs = [['pobi'], ['pobi', 'woni']];
      const expects = ['최종 우승자 : pobi', '최종 우승자 : pobi, woni'];

      inputs.forEach((input, index) => {
        const logSpy = getLogSpy();

        app.printWinners(input);

        expect(logSpy).toHaveBeenCalledWith(
          expect.stringContaining(expects[index]),
        );
      });
    });
  });

  test('라운드 결과 출력 테스트', () => {
    const inputs = [
      { name: 'pobi', position: 2 },
      { name: 'woni', position: 1 },
    ];
    const expects = ['pobi : --', 'woni : -'];

    const logSpy = getLogSpy();

    inputs.forEach((input, index) => {
      app.printRoundResult(input);

      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(expects[index]),
      );
    });
  });
});
