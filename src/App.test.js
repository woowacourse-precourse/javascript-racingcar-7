import App from './App.js';
import { Console, MissionUtils } from '@woowacourse/mission-utils';
import * as Validate from './utils/validate.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

jest.mock('./utils/validate.js', () => ({
  validateInputCarNames: jest.fn(),
  validateInputTryNum: jest.fn(),
}));

describe('App 클래스 테스트', () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.clearAllMocks();
  });

  test('자동차 이름 입력 유효성 검사 성공', async () => {
    Console.readLineAsync.mockResolvedValueOnce('car1,car2');
    Validate.validateInputCarNames.mockReturnValueOnce(true);

    await app.run();

    expect(Console.readLineAsync).toHaveBeenCalled();
    expect(Validate.validateInputCarNames).toHaveBeenCalledWith('car1,car2');
  });

  test('자동차 이름 입력 유효성 검사 실패 시 에러 처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('car1,car2');
    Validate.validateInputCarNames.mockReturnValueOnce(false);

    await expect(app.run()).rejects.toThrow('[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.');
  });

  test('시도 횟수 입력 유효성 검사 성공', async () => {
    Console.readLineAsync.mockResolvedValueOnce('car1,car2');
    Validate.validateInputCarNames.mockReturnValueOnce(true);
    Console.readLineAsync.mockResolvedValueOnce('5');
    Validate.validateInputTryNum.mockReturnValueOnce(true);

    await app.run();

    expect(Validate.validateInputTryNum).toHaveBeenCalledWith(5);
  });

  test('시도 횟수 입력 유효성 검사 실패 시 에러 처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('car1,car2');
    Validate.validateInputCarNames.mockReturnValueOnce(true);
    Console.readLineAsync.mockResolvedValueOnce('invalid');
    Validate.validateInputTryNum.mockReturnValueOnce(false);

    await expect(app.run()).rejects.toThrow('[ERROR] 입력값에 문제가 있습니다. 다시 실행해주세요.');
  });

  test('readyRacingGame 메소드가 이름 배열을 객체 배열로 변환', () => {
    const carNamesArray = ['car1', 'car2'];
    const expected = [
      { carName: 'car1', forwardNum: 0 },
      { carName: 'car2', forwardNum: 0 },
    ];

    expect(app.readyRacingGame(carNamesArray)).toEqual(expected);
  });

  test('startRacingGaming 메소드에서 자동차가 이동하는지 확인', () => {
    const carNamesObjectArray = [
      { carName: 'car1', forwardNum: 0 },
      { carName: 'car2', forwardNum: 0 },
    ];
    MissionUtils.Random.pickNumberInRange.mockReturnValue(6); // 무조건 이동하도록 설정

    app.startRacingGaming(carNamesObjectArray, 1);

    expect(carNamesObjectArray[0].forwardNum).toBe(1);
    expect(carNamesObjectArray[1].forwardNum).toBe(1);
  });

  test('whoIsWinner 메소드가 우승자를 올바르게 출력하는지 확인', () => {
    const carNamesObjectArray = [
      { carName: 'car1', forwardNum: 3 },
      { carName: 'car2', forwardNum: 3 },
      { carName: 'car3', forwardNum: 2 },
    ];

    app.whoIsWinner(carNamesObjectArray);

    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : car1, car2');
  });
});
