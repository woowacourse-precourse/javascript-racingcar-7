import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import Car from '../src/Car.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

beforeEach(() => {
  Console.readLineAsync.mockReset();
});

describe('App 클래스 테스트', () => {
  test('자동차 이름 문자열 입력 받기', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();
    await app.run();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
  });

  test('입력값이 공백일 때 예외 발생1', async () => {
    Console.readLineAsync.mockResolvedValueOnce('');

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 공백이 입력됐습니다');
  });

  test('입력값이 공백일 때 예외 발생2', async () => {
    Console.readLineAsync.mockResolvedValueOnce('  ');

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 공백이 입력됐습니다');
  });

  test('입력값이 이름 1개 일때 예외 발생', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 플레이어는 1명일 수 없습니다'
    );
  });

  test('시도할 횟수 입력 받기', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();
    await app.run();

    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '시도할 횟수는 몇 회인가요?\n'
    );
  });

  test('시도할 횟수에 NaN가 입력됐을 때 예외처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('abc');

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR] 숫자를 입력해야합니다');
  });

  test('시도할 횟수에 0이 입력됐을 때 예외처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('    ');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 빈 문자열 또는 0은 입력할 수 없습니다'
    );
  });

  test('시도할 횟수에 음수가 입력됐을 때 예외처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('-2');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 음수는 입력할 수 없습니다'
    );
  });

  test('실수 또는 정상 범위를 벗어난 정수가 입력됐을 때 예외처리1', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('1.2');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 실수, 정상 범위를 벗어난 정수는 입력할 수 없습니다'
    );
  });

  test('실수 또는 정상 범위를 벗어난 정수가 입력됐을 때 예외처리2', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce(
      '99999999999999999999999999999999'
    );

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 실수, 정상 범위를 벗어난 정수는 입력할 수 없습니다'
    );
  });

  test('이름 문자열을 쉼표로 분리하여 배열로 변환', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();
    await app.run();

    const expectedArray = ['pobi', 'woni', 'jun'];
    const nameArray = 'pobi,woni,jun'.split(',');

    expect(nameArray).toEqual(expectedArray);
  });

  test('이름이 5글자가 넘을 경우 예외처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,testname');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 이름은 5글자를 넘을 수 없습니다'
    );
  });

  test('이름이 영문으로만 구성된게 아닐 경우 예외처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('po*bi,wo*ni,jun');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 이름은 영문자만 가능합니다'
    );
  });

  test('모든 이름이 같은 경우 예외처리', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,pobi');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 모든 플레이어들의 이름이 같습니다'
    );
  });

  test('자동차 이름 배열을 기반으로 carArray가 올바르게 생성되는지 테스트', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');
    Console.readLineAsync.mockResolvedValueOnce('5');

    const app = new App();
    await app.run();

    const carArray = ['pobi', 'woni', 'jun'].map((name) => new Car(name));

    carArray.forEach((car, index) => {
      expect(car.getName()).toBe(['pobi', 'woni', 'jun'][index]);
    });
  });
});
