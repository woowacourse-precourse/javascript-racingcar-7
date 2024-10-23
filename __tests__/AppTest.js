import { Console } from '@woowacourse/mission-utils';
import App from '../src/App.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

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
});
